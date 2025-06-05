import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
            <p className="mt-4 text-xl text-gray-500">Passionate about creating amazing web experiences</p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Senior Web Developer</h4>
                    <p className="text-gray-500">2020 - Present</p>
                    <p className="mt-2 text-gray-600">Leading development of modern web applications using React and related technologies.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Frontend Developer</h4>
                    <p className="text-gray-500">2018 - 2020</p>
                    <p className="mt-2 text-gray-600">Developed responsive web interfaces and improved user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}