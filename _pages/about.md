---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

Hi! I'm **Mahmut Zahid Göksu**, a Machine Learning Engineer at **NewMind AI** in Istanbul. Right now I'm working on the **AI Factory** project, where I build **data pipelines on the [MareNostrum5](https://www.bsc.es/marenostrum/marenostrum-5) supercomputer** — large-scale data processing that feeds our downstream training and inference work.

Most of what excites me about LLMs isn't the chat box — it's what happens when you point them at a mountain of unstructured data and get something **structured, useful, queryable** back out. Extraction, classification, labeling, enrichment at scale. Models aren't just something you talk to; they're a way to **make data work for you**. That's where I want to spend my time: building the pipelines and systems that turn raw documents into knowledge that downstream tools — and people — can actually use.

On the modeling side, I pre-train **ModernBERT** and continually pre-train **Qwen3** models for the Turkish legal domain.

I'm also passionate about **cryptography** — during my research internship at TÜBİTAK BİLGEM I worked on differential cryptanalysis of DES and studied authentication protocols, and the field still pulls at me whenever I get the chance.

I graduated with a **B.Sc. in Computer Engineering** from **Koç University** in Istanbul (June 2025, GPA 3.5/4.0). My research interests sit around **LLM pre-training & tokenization**, **mechanistic interpretability**, **multi-modal learning**, and **reinforcement learning**.

You can grab my [CV / resume](files/mahmutgoksu-resume.pdf).


# 💻 Experience

- *Aug 2025 – Present*, **Machine Learning Engineer**, [NewMind AI](https://newmind.ai/), Istanbul, Turkey.
  - Pre-trained two **ModernBERT** models (base and large, 155M / 403M params) from scratch on a multi-node GPU cluster for Turkish legal-domain retrieval, scoring 47.52 / 46.42 legal and 50.07 / 51.59 nDCG@10 — ranking **#1 and #2 among Turkish retrieval encoders** (+3.7 pts over the best prior Turkish baseline) and competitive with larger multilingual models such as bge-m3 (567M) and Google's embeddinggemma (307M).
  - Post-trained ModernBERT using contrastive learning on synthetically generated query–document pairs, substantially improving retrieval quality on legal corpora.
  - Worked in NewMind's **AI Factory** on the **MareNostrum5** supercomputer, building large-scale data processing pipelines spanning synthetic data generation and data extraction that power the ontological layer of NewMind's systems, with LLM inference served across multi-node deployments via vLLM and TensorRT-LLM.
  - Performed continual pre-training of **Qwen3** models in a multi-node distributed setup to adapt them to the Turkish legal domain, improving downstream task performance on domain-specific language understanding.
  - Designed and implemented a custom Byte-Pair Encoding (BPE) tokenizer with morphology-aware merging rules tailored to Turkish legal text, improving subword segmentation over standard tokenizers.
  - Curated large-scale pre-training datasets from web crawls and internal sources; designed data-cleaning pipelines to correct OCR artifacts and normalize noisy Turkish text at scale.
  - Developed a microservice for serving LLMs with dynamic LoRA adapter loading via **LoRAX**, enabling efficient multi-tenant model serving.

- *Jun 2024 – Sep 2024*, **Research Intern**, TÜBİTAK BİLGEM, Kocaeli, Turkey.
  - Implemented differential cryptanalysis attacks on 4-, 6-, and 8-round DES, recovering round keys and validating theoretical complexity bounds.
  - Presented research on differential cryptanalysis of DES-like systems to the research team.
  - Surveyed authentication protocols (Kerberos, Needham–Schroeder, Woo–Lam) and TLS/SSL versions, and prepared technical presentations on their security guarantees and known vulnerabilities.

- *Jul 2023 – Sep 2023*, **Machine Learning Engineering Intern**, [NewMind AI](https://newmind.ai/), Istanbul, Turkey.
  - Engineered a recommendation system using collaborative filtering on user-interaction logs to generate tailored content suggestions.
  - Built a graph database in Neo4j and implemented node embedding algorithms for a node-prediction task.
  - Researched and presented several node embedding methods, including GraphSAGE and node2vec, comparing their assumptions, trade-offs, and suitability for the target use case.

- *Mar 2023 – Apr 2023*, **Machine Learning Engineering Intern**, [QCRI – Qatar Computing Research Institute](https://www.hbku.edu.qa/en/qcri), Doha, Qatar.
  - Built an offensive-language detection model for Turkish Twitter data, training and comparing classical baselines (SVM, Naive Bayes) in scikit-learn against a BERT-based classifier in Keras, using both publicly available corpora and internal QCRI datasets.

- *Jul 2022 – Aug 2022*, **Software Engineering Intern**, [NewMind AI](https://newmind.ai/), Istanbul, Turkey.
  - Developed an object detection model for solving CAPTCHAs in a web-scraping pipeline, and implemented a speech-to-text system for meeting-recording transcription.


# 🧪 Projects

- **Mechanistic Interpretability of Multimodal LLMs** — *COMP447 Course Project*
  - Implemented a **logit lens** on Gemma3-4B to project intermediate hidden states onto the unembedding space, revealing layer-wise shifts from uninterpretable early representations to semantically meaningful per-patch features in later layers.
  - Trained a **Top-K sparse autoencoder** (k=128, 16× expansion to 40,960 features) on Gemma3's layer-6 MLP activations using 5.8M tokens from GQA, achieving 98.5% explained variance and 95% cosine similarity on reconstructions.
  - Designed an automated LLM-driven ablation pipeline that zeros top-activating latents per token and analyzes output shifts to surface candidate monosemantic features.
  - Explored circuit tracing with transcoders on LLaMA-3.2-1B for VQA — among the first attempts at transcoder-based circuit tracing in a multimodal setting.

- **Touch-Vision-Language Model for Textile Classification** — *COMP441 Course Project*
  - Fine-tuned the Touch-Vision-Language (TVL) multimodal model on the TextileNet dataset using LoRA, adapting a LLaMA-2-based architecture for fiber and fabric classification across 60 material categories.
  - Curated a custom instruction-tuning dataset of question–answer pairs across 10 prompt templates to convert TextileNet labels into conversational supervision.
  - Converted the generative model into a classifier via sentence-embedding similarity matching, achieving **54.2% top-1 on fiber** and **76.4% top-1 on fabric**, outperforming ResNet-50 and ViT baselines by 5–11 points.

- **Monocular Depth Estimation for Martian Terrain** — *COMP411 Course Project*
  - Generated a synthetic Mars-surface dataset using **Unreal Engine 5** with raw depth-buffer ground truth exported as EXR, simulating rover-perspective navigation footage.
  - Fine-tuned **Marigold**, a latent-diffusion monocular depth estimator, on the synthetic Mars dataset; benchmarked zero-shot and fine-tuned variants against Depth Anything V2, Depth Pro, and DepthCrafter using F1, AbsRel, and δ₁.

- **Mangalagent — Reinforcement Learning for Mangala** — *COMP438 Course Project*
  - Developed RL agents for **Mangala**, a Turkish Mancala-family strategy game, achieving a **74–77% win rate** against a random baseline when moving first.
  - Implemented a TD-Gammon-style agent with a four-layer value network, depth-5 minimax look-ahead, and an experience-replay buffer.
  - Built an AlphaZero-style Monte Carlo Tree Search with PUCT selection and trained policy/value networks via REINFORCE on self-play trajectories.


# 📖 Education

- *Sep 2021 – Jun 2025*, **B.Sc. in Computer Engineering**, Koç University, Istanbul, Turkey. GPA: 3.5 / 4.0.
  - Relevant coursework: Machine Learning (COMP421), Deep Learning (COMP441), Computer Vision with Deep Learning (COMP411), Reinforcement Learning (COMP438), Deep Unsupervised Learning (COMP447).


# 🛠 Skills

- **Programming Languages**: Python, C, C++, Java, Scheme.
- **ML / AI Frameworks**: PyTorch, Hugging Face Transformers, scikit-learn, Keras, Nvidia NeMo.
- **LLM Training & Serving**: vLLM, TensorRT-LLM, LoRAX, LoRA / PEFT, FSDP, DeepSpeed.
- **Infrastructure & Tools**: Git, Docker, SLURM, Singularity, Elasticsearch, Neo4j.
- **Spoken Languages**: English (Native), Turkish (Native); IELTS 7.0 / 9.0.
