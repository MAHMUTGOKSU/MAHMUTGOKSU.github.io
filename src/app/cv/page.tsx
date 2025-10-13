export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
          Mahmut Zahid Göksu
        </h1>
        <a
          href="/mahmutgoksu-resume.pdf"
          download
          className="bg-gradient-to-r from-primary-400 to-primary-500 text-dark px-4 py-2 rounded-lg hover:from-primary-500 hover:to-primary-600 transition font-semibold shadow-lg"
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-8">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary-400 pb-2">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">Koç University</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="text-sm text-gray-500">Istanbul, Turkey</p>
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Relevant Coursework:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Operating Systems (COMP304), Machine Learning (COMP421), Artificial Intelligence (COMP341), 
                  Deep Learning (COMP441), Computer Vision with Deep Learning (COMP411), Reinforcement Learning (COMP438), 
                  Deep Unsupervised Learning (COMP447)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary-400 pb-2">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">ML Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">NewMind AI</p>
              <p className="text-sm text-gray-500 mb-2">August 2024 - Present | Istanbul, Turkey</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Engineered a custom tokenization pipeline utilizing a Byte-Pair Encoding (BPE) algorithm enhanced with morphologically aware merging to improve subword segmentation</li>
                <li>Pre-trained BERT and RoBERTa models using the Nemo Framework</li>
                <li>Developed a microservice for serving Large Language Models (LLMs) and dynamically loading LoRA adapters using Lorax</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">Research Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">TUBITAK BILGEM</p>
              <p className="text-sm text-gray-500 mb-2">June 2024 - September 2024 | Istanbul, Turkey</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Implemented an attack on DES with 4, 6, and 8 rounds using differential cryptanalysis</li>
                <li>Presented research on differential cryptanalysis on DES-like systems</li>
                <li>Researched different authentication protocols such as Kerberos, Needham-Schroder, and Woo-Lam</li>
                <li>Explored various versions of TLS/SSL and prepared presentation material</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">ML Engineering Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">NewMind AI</p>
              <p className="text-sm text-gray-500 mb-2">July 2023 - September 2023 | Istanbul, Turkey</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Engineered a recommendation system using collaborative filtering, leveraging user interaction logs for tailored suggestions</li>
                <li>Built a graph database using Neo4j and implemented node embedding algorithms for node prediction task</li>
                <li>Researched and presented various node embedding algorithms, explaining their applications and comparing advantages and limitations</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">ML Engineering Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">QCRI - Qatar Computing Research Institute</p>
              <p className="text-sm text-gray-500 mb-2">March 2023 - April 2023 | Doha, Qatar</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Created an offensive language detection model based on Twitter data, utilizing natural language processing techniques</li>
                <li>Developed a system to analyze and predict offensive content from text data, improving content moderation</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">NewMind AI</p>
              <p className="text-sm text-gray-500 mb-2">July 2022 - August 2022 | Istanbul, Turkey</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed an object detection model capable of solving CAPTCHAs for web scraping tasks</li>
                <li>Implemented a speech-to-text system to transcribe meeting recordings with accuracy and efficiency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary-400 pb-2">Projects</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-secondary-400 pl-4">
              <h3 className="text-lg font-semibold">COMP447 - Mechanistic Interpretability (Deep Unsupervised Learning)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                <li>Investigated internal mechanisms of multimodal LLMs for visual question answering by implementing a logit-lens on the Gemma3 model</li>
                <li>Applied mechanistic interpretability through sparse autoencoders to learn sparse and interpretable features tested on the GQA dataset</li>
                <li>Designed an automated pipeline leveraging LLMs to perform ablations on learned sparse features</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary-400 pl-4">
              <h3 className="text-lg font-semibold">COMP438 - Mangala RL Agent (Reinforcement Learning)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                <li>Developed RL agents to master Mangala, a Turkish strategy game, achieving 74-77% win rate against baseline agents</li>
                <li>Implemented Monte Carlo Tree Search with policy/value networks and TD-Gammon with minimax lookahead using PyTorch</li>
                <li>Optimized agent performance through replay buffers and epsilon-greedy exploration</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary-400 pl-4">
              <h3 className="text-lg font-semibold">COMP441 - TVL Multi-modal LLM (Deep Learning)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                <li>Developed an instruction-tuning dataset using the TextileNet dataset to enhance textile classification</li>
                <li>Trained the TVL (Touch-Vision-Language) model on custom dataset for accurate fabric and fiber classification</li>
                <li>Investigated whether tactile information embedded in the model improved classification in textile tasks</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary-400 pl-4">
              <h3 className="text-lg font-semibold">COMP411 - Marigold Depth Estimation (Computer Vision)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                <li>Trained Marigold, a monocular depth estimation model, using a custom Mars landscape dataset</li>
                <li>Evaluated Marigold against DepthCrafter, DepthAnything, and DepthPro on the custom Mars dataset to benchmark performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary-400 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">Programming Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Python, C, C++, Java, Scheme
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">ML Frameworks & Tools</h3>
              <p className="text-gray-700 dark:text-gray-300">
                PyTorch, Scikit-Learn, Nvidia NEMO Framework
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">Technologies</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Git, Docker, Elasticsearch, Neo4j, Singularity
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">
                English (Native), Turkish (Native)
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

