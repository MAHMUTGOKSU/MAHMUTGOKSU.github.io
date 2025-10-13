export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-8">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Machine Learning Engineer with expertise in deep learning, natural language processing,
            and computer vision. Passionate about building practical AI solutions and contributing
            to research.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Your University</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master of Science in Computer Science
              </p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Your University</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="text-sm text-gray-500">2016 - 2020</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Machine Learning Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name</p>
              <p className="text-sm text-gray-500 mb-2">2022 - Present</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed and deployed ML models for production systems</li>
                <li>Improved model performance by 30% through optimization</li>
                <li>Led team of 3 engineers on key projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Python, JavaScript, TypeScript, C++
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ML Frameworks</h3>
              <p className="text-gray-700 dark:text-gray-300">
                PyTorch, TensorFlow, scikit-learn, Hugging Face
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Areas of Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                NLP, Computer Vision, Deep Learning, MLOps
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Technologies</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Docker, Kubernetes, Git, AWS, GCP
              </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Publications</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                Your publications will be listed here. Update this section with your actual research papers.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-center text-gray-600 dark:text-gray-400">
          <strong>Note:</strong> This is a template CV. Please update the content with your actual information.
          You can also replace this page with a PDF viewer or link to your full CV.
        </p>
      </div>
    </div>
  );
}

