import React, { useEffect } from "react";

const Privacy = () => {
    useEffect(()=>{ window.scrollTo(0,0);},[])
  return (
    
    <div className=" px-4 py-10 mt-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-orange-800">Privacy Policy</h1>

      <p className="mb-4 text-gray-600">
        This Privacy Policy explains how RecipeBook collects, uses, and protects the personal information you provide
        while using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">1. Information We Collect</h2>
      <p className="mb-4 text-gray-600">
        We collect information you voluntarily provide to us such as your name, email address, and any data submitted
        through forms. We may also collect non-personal information such as browser type, IP address, and device data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">2. How We Use Your Information</h2>
      <p className="mb-4 text-gray-600">
        We use your information to:
        <ul className="list-disc ml-6 mt-2">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send you updates, newsletters, or promotional content (you can opt out anytime)</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">3. Information Sharing</h2>
      <p className="mb-4 text-gray-600">
        We do not sell, trade, or rent your personal information to others. We may share data with trusted partners who
        assist us in operating our site, so long as those parties agree to keep this information confidential.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">4. Data Security</h2>
      <p className="mb-4 text-gray-600">
        We implement appropriate security measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">5. Your Rights</h2>
      <p className="mb-4 text-gray-600">
        You may request access to, correction of, or deletion of your personal data by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">6. Changes to This Policy</h2>
      <p className="mb-4 text-gray-600">
        We may update this Privacy Policy at any time. Changes will be posted on this page with an updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-800">7. Contact Us</h2>
      <p className="text-gray-600">
        If you have any questions about this Privacy Policy, please contact us at: <br />
        <strong>Email:</strong> RecipeBook@gmail.com
      </p>
    </div>
  );
};

export default Privacy;
