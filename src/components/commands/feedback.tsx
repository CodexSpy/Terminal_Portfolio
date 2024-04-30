import React, { useState } from "react";

interface FeedbackCmdProps {
  onSubmit: (feedback: string) => void;
}

const FeedbackCmd: React.FC<FeedbackCmdProps> = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim() !== "") {
      onSubmit(feedback);
      setFeedback("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
      <textarea
        value={feedback}
        onChange={handleChange}
        placeholder="Your feedback..."
        className="w-full p-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackCmd;