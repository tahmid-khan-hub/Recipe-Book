import React, { useEffect } from "react";

const Terms = () => {
    useEffect(()=>{ window.scrollTo(0,0);},[])
  return (
    <div className=" px-2 py-10 mt-10 ">
      <h1 className="text-3xl font-bold mb-6 text-orange-800">Terms & Conditions</h1>

      <p className="mb-4 text-gray-700">
        These Terms and Conditions ("Terms") govern your use of RecipeBook, including all features, content, and
        functionality offered through our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">1. Acceptance of Terms</h2>
      <p className="mb-4 text-gray-600">
        By accessing or using RecipeBook, you agree to be bound by these Terms and our Privacy Policy. If you do not agree,
        please do not use the website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">2. Use of the Website</h2>
      <p className="mb-4 text-gray-600">
        You must use the website for lawful purposes only. You agree not to post or transmit any material that is
        defamatory, obscene, offensive, or violates any laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">3. Intellectual Property</h2>
      <p className="mb-4 text-gray-600">
        All content on RecipeBook, including text, graphics, logos, and images, is the property of RecipeBook or its
        content suppliers. You may not use any content without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">4. Termination</h2>
      <p className="mb-4 text-gray-600">
        We reserve the right to suspend or terminate your access to the website at our discretion, without notice, if we
        believe you have violated these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">5. Changes to Terms</h2>
      <p className="mb-4 text-gray-600">
        RecipeBook reserves the right to update or modify these Terms at any time. Changes will be effective immediately
        upon posting.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">6. Contact Us</h2>
      <p className="text-gray-600">
        If you have any questions about these Terms, please contact us at: <br />
        <strong>Email:</strong> RecipeBook@gmail.com
      </p>
    </div>
  );
};

export default Terms;
