import { Mic, FileText, Brain, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Speaking Practice",
      description: "Advanced AI-powered speaking practice sessions with real-time feedback and pronunciation analysis.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mock Tests",
      description: "Authentic IELTS mock tests that simulate real exam conditions with detailed performance analytics.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Band Score Predictor",
      description: "Get accurate band score predictions using our advanced AI algorithm based on your practice performance.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Learn from certified IELTS trainers with proven track records and personalized study plans.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with expert instruction 
            to ensure your IELTS success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;