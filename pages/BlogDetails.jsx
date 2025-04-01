import React from "react";
import logo3 from "/assets/images/logo3.png";
import Header from "../components/Header";
import bgimg15 from "/assets/images/bgimg15.png";
export default function BlogDetails() {
  return (
    <div>
      <Header src={logo3} textColor="text-black" />

      <div className="pt-40">
        <img src={bgimg15} className="w-full" />
      </div>

      <div className="flex flex-col gap-5 pt-20 lg:px-20 px-3 md:px-5">
        <div className="flex gap-5 items-center">
          <button className="text-white bg-[#000000] font-Marcellus-SC font-[400] text-[20px] py-1 px-5 rounded-xl">
            Blog
          </button>
          <span className="font-Marcellus-SC text-[#000000] font-[400] text-[20px]">
            JUL, 2024
          </span>
        </div>
        <div className="text-[#000000] py-5 font-[700] lg:text-[40px] md:text-[30px] text-[20px] lg:w-[45%] leading-tight">
          Enhancing Document Extraction with Azure AI Document Intelligence and
          LangChain for RAG Workflows
        </div>
        <div className="text-[#000000] font-[400] text-[20px] font-Marcellus pb-20 whitespace-pre-line">
          The broadening of conventional data engineering pipelines and
          applications to include document extraction and preprocessing for
          unstructured PDFs, audio, and video files is becoming more prevalent.
          This shift is propelled by the increasing demand for advanced
          generative AI applications in businesses, adhering to the RAG
          (Retrievable Augmented Generation) model. In this post, I will discuss
          a proof of concept that utilizes Azure AI Document Intelligence to
          augment these functionalities. In a prior solution, I examined the
          capability of Azure AI Search to automatically vectorize data through
          its integrated vectorization feature. This feature manages the entire
          pipeline process, from ingestion and extraction to enrichment and
          uploading data to the search index, with minimal or no custom coding
          required. Nonetheless, I noted a limitation: the current skills,
          despite the option to import external ones, failed to extract all
          vital content from documents, such as embedded tables. Introduction.
          In this post and the accompanying notebook, I present a solution
          utilizing the prebuilt layout model from Azure AI Document
          Intelligence to extract essential content (including a table) from a
          PDF document. Subsequently, it employs the semantic chunking feature
          rather than the fixed-length chunking option. This approach aims to
          address the limitations of the prior solution that could not “crack”
          the embedded table in the PDF document, enhancing the relevance and
          precision of search retrieval. This is the first of two posts, which
          shows a solution that uses Azure AI Document Intelligence and
          LangChain to create a Retrieval Augmented Generation (RAG) workflow.
          It uses the LangChain Azure AI Document Intelligence document loader
          to ingest, extract and retrieve table values, paragraphs, and layout
          information from a PDF file. The output is in markdown format, which
          is processed by LangChain's markdown header splitter. This class
          supports the semantic chunking feature of Azure AI Document
          Intelligence service to produce semantic chunks of the source
          document. We employ the Azure AI Search Python SDK to build the Azure
          AI Search index, load the semantically chunked documents into this
          index content field and execute a hybrid + semantic search query at
          the end of the notebook to assess the search result relevance. Below
          is a straightforward architectural diagram of the solution.: Before
          this post extends too much and loses its appeal, let's explore the
          essential elements of the solution architecture and the corresponding
          notebook code implementations that are pertinent to this discussion.
          LangChain - Ingestion, Extraction and Semantic Chunking: LangChain is
          a framework for developing LLM (large language model) powered
          applications. LangChain has built a huge collection of abstractions
          that enable the integration of LLMs to external data sources, user
          input query and other components and services required to build GenAI
          application use cases. We introduced LangChain into this solution
          because it provided two key abstractions: 1. The Azure AI Document
          Intelligence Loader API offers an interface for loading data into
          Azure AI Document Intelligence and extracting the necessary content
          from documents. In this proof of concept, I am utilizing a PDF
          document that contains an embedded table. To facilitate the successful
          import of the PDF document from Azure Blob Storage, the RBAC role of
          Storage Blob Data Reader has been granted to the Document Intelligence
          managed identity for the Blob storage resource. The 'prebuilt layout'
          extraction model for Document Intelligence is one of the parameter
          values provided during the ingestion task. It supports formatting of
          tables with column headers into key-value pairs (to enhance
          readability for the LLM), and each table row is transformed into a
          text line, while maintaining the original structure of the table
          values. 2. The MarkdownHeaderTextSplitter class divides the markdown
          file generated from an extracted PDF document according to specified
          headers. Since a markdown file is structured with headers, this
          organizes the content into semantic sections. The headers used for
          splitting are determined by the 'headers_to_split_on' configuration.
          Chunking is a crucial component in the development of any RAG-based
          solution. There are two primary methods of chunking: fixed-sized and
          semantic. This PoC aims to evaluate the relevance and accuracy of RAG
          responses using the semantic chunking method. This technique divides
          extracted content according to specific content headers or sections,
          as opposed to the fixed-sized method, which relies on an overlap
          configuration to preserve contextual relevance across text segments.
          Semantic chunking allows an application to identify semantically
          coherent fragments within sentences or paragraphs. These fragments can
          be processed separately and then reassembled into semantic
          representations without losing information, context, or semantic
          integrity. The text's inherent meaning guides the chunking process. In
          any document extraction process, the chunking strategy requires
          careful consideration and planning, as it significantly impacts the
          relevance and accuracy of query responses in RAG-based solutions.
          Determining the size of tokens per page can aid in the implementation
          of chunking. The text splitter's output is a list of document objects,
          as demonstrated in the following code snippet from the notebook.:
          Azure AI Search - Create and Load Vector Index: Azure AI Search offers
          secure and rapid information retrieval at scale for data content
          within generative AI applications. In this scenario, the content of
          the PDF document, which is chunked, will be vectorized and stored in
          the search service to enable the millisecond retrieval times necessary
          for RAG-based applications. Such quick retrieval cannot be achieved
          using Azure Blob storage. The search service does not interact with
          the primary data store of blob storage, except when utilizing an
          Indexer. I utilized the Azure AI Search Python SDK to construct the
          vector search index by first defining the schema, then initiating the
          data import process. For the vector search configuration, I chose the
          Hierarchical Navigable Small World (HNSW) algorithm over the
          Exhaustive k-nearest neighbors (KNN) because it's more efficient. HNSW
          offers a scalable solution for nearest neighbor searches by quickly
          identifying approximate nearest neighbors, which is ideal for
          large-scale and high-dimensional data applications. Additional details
          on vector search configuration can be found here. I am utilizing the
          Azure OpenAI text-embedding-ada-002 model to vectorize segmented
          content for vector search capabilities. An ID field for each document
          in the index is generated using a custom function that employs the
          base64 Python package. The code snippet below illustrates the
          configuration of the vector index and the data loading process for
          this proof of concept: Azure AI Document Intelligence: Azure AI
          Document Intelligence is a cloud-based Azure AI Service that enables
          the building of intelligent document processing solutions. In a
          previous exploration, I implemented the Azure AI Search integrated
          vectorization feature that enables an automated solution for data
          extraction, ingestion and retrieval for RAG applications. While it's
          great for a lot of use cases, I wasn't able to get answers to queries
          that required searching through embedded table data in the PDF file.
          Azure AI Document Intelligence has a wider range of document
          extraction models, with a lot more functionality for complex PDF
          documents and other file types. Two primary reasons for choosing this
          service: The prebuilt layout model has the functionality to “crack”
          and extract data from most complex PDF documents. I directly ingested
          the PDF document from the Blob storage container. The semantic
          chunking technique seems an exciting option that could potentially
          yield better answers and search responses than the fixed-sized
          chunking technique. Semantic and Hybrid Search: This search feature
          provided an accurate answer to my query regarding the health plan's
          cost. The prior solution failed to address this question as the
          extraction skills applied, along with the underlying model, were
          unable to completely decipher the PDF document and extract the values
          from the embedded table. Azure Functions - Semantic Kernel: Azure
          Functions, a serverless computing service, hosts the semantic kernel
          and LangChain source code for the application. The semantic kernel,
          similar to LangChain, is an LLM framework that aids in the development
          of Generative AI applications. In a follow-up post, I will demonstrate
          how I utilized the Semantic Kernel to orchestrate the various
          components of the Generative AI application, integrating prompts, chat
          services, embeddings, and native functions (plugins), among others.
          Conclusion: This post showcases how to utilize Azure AI Document
          Intelligence to manually process a PDF document with its prebuilt
          layout model and extract all the content, including any embedded
          tables. The objective is to employ this content to ground the
          responses of an LLM within a knowledgebase Q&A agent. Azure AI
          Document Intelligence is recommended for production use cases
          involving a variety of complex file types and formats like PDFs. It
          appears to be better suited to meet application requirements compared
          to the Azure AI Search integrated vectorization option. Additionally,
          I plan to explore the evaluation of generative AI applications using
          the prompt flow Python SDK, responsible prompt engineering tools and
          techniques, and content safety measures in Azure. The code for the PoC
          is available in the following repository.
        </div>
      </div>
    </div>
  );
}
