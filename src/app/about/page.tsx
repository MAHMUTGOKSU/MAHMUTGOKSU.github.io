export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Machine Learning Engineer building practical AI solutions
        </p>
      </div>

      {/* Introduction Card */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-dark-lighter dark:to-secondary-950 rounded-lg p-8 mb-12 border-2 border-primary-200 dark:border-primary-700">
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          Hi! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Mahmut Zahid Göksu</span>, 
          a Machine Learning Engineer passionate about deep learning, natural language processing, and computer vision. 
          I love building practical AI solutions and diving deep into research.
        </p>
      </div>

      <div className="space-y-12">
        {/* Background */}
        <section className="border-l-4 border-primary-400 pl-6">
          <h2 className="text-3xl font-bold mb-4 text-secondary-800 dark:text-primary-400">
            🎓 Background
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm pursuing my Bachelor's degree in <span className="font-semibold">Computer Engineering</span> at 
            <span className="font-semibold text-secondary-700 dark:text-secondary-300"> Koç University</span> in Istanbul, Turkey. 
            My coursework spans machine learning, deep learning, computer vision, reinforcement learning, and deep unsupervised learning.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="border-l-4 border-secondary-400 pl-6">
          <h2 className="text-3xl font-bold mb-4 text-secondary-800 dark:text-primary-400">
            💼 Professional Experience
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Currently working as an <span className="font-semibold">ML Engineer at NewMind AI</span>, where I focus on:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 mt-1.5">▸</span>
                <span className="text-gray-700 dark:text-gray-300">Developing custom tokenization pipelines with morphologically-aware BPE</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 mt-1.5">▸</span>
                <span className="text-gray-700 dark:text-gray-300">Pre-training large language models (BERT, RoBERTa) using Nvidia NEMO</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 mt-1.5">▸</span>
                <span className="text-gray-700 dark:text-gray-300">Building microservices for serving LLMs with dynamic LoRA adapters</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              Previously worked on recommendation systems, graph databases (Neo4j), cryptanalysis research at 
              <span className="font-semibold"> TUBITAK BILGEM</span>, and offensive language detection at 
              <span className="font-semibold"> QCRI</span>.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="bg-secondary-50 dark:bg-secondary-950 rounded-lg p-6 border-2 border-secondary-200 dark:border-secondary-800">
          <h2 className="text-3xl font-bold mb-6 text-secondary-800 dark:text-primary-400">
            🔬 Research Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Large Language Models</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">NLP & Tokenization</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">👁️</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Computer Vision</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Multi-modal Learning</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Reinforcement Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Game AI & Strategy</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔍</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Interpretability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding Models</p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Here */}
        <section className="border-l-4 border-primary-400 pl-6">
          <h2 className="text-3xl font-bold mb-4 text-secondary-800 dark:text-primary-400">
            📝 What I Do Here
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-lighter p-6 rounded-lg border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Document ML projects, research implementations, and experiments
              </p>
            </div>
            <div className="bg-white dark:bg-dark-lighter p-6 rounded-lg border-2 border-secondary-200 dark:border-secondary-700 hover:border-secondary-400 dark:hover:border-secondary-500 transition">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Paper Reviews</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                In-depth analyses of AI/ML research papers with insights
              </p>
            </div>
            <div className="bg-white dark:bg-dark-lighter p-6 rounded-lg border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Portfolio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showcase professional experience and academic work
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-primary-50 dark:bg-dark-lighter rounded-lg p-6 border-2 border-primary-200 dark:border-primary-700">
          <h2 className="text-3xl font-bold mb-6 text-secondary-800 dark:text-primary-400">
            🛠️ Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary-700 dark:text-primary-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'C++', 'Java', 'Scheme'].map((skill) => (
                  <span key={skill} className="bg-white dark:bg-secondary-900 px-3 py-1 rounded-full text-sm border border-primary-300 dark:border-primary-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700 dark:text-primary-400 mb-3">ML/AI</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'Scikit-Learn', 'NEMO', 'Transformers'].map((skill) => (
                  <span key={skill} className="bg-white dark:bg-secondary-900 px-3 py-1 rounded-full text-sm border border-primary-300 dark:border-primary-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700 dark:text-primary-400 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Neo4j', 'Elasticsearch'].map((skill) => (
                  <span key={skill} className="bg-white dark:bg-secondary-900 px-3 py-1 rounded-full text-sm border border-primary-300 dark:border-primary-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700 dark:text-primary-400 mb-3">Spoken Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['English (Native)', 'Turkish (Native)'].map((skill) => (
                  <span key={skill} className="bg-white dark:bg-secondary-900 px-3 py-1 rounded-full text-sm border border-primary-300 dark:border-primary-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="text-center py-8 bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-secondary-950 dark:to-dark-lighter rounded-lg border-2 border-primary-300 dark:border-primary-700">
          <h2 className="text-3xl font-bold mb-4 text-secondary-800 dark:text-primary-400">
            💬 Let's Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Interested in discussing machine learning, collaborating on projects, or just chatting about AI research? 
            Feel free to reach out!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Find my contact information in the footer below
          </p>
        </section>
      </div>
    </div>
  );
}

