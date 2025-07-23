"use client";

import React from "react";
import Image from "next/image";

interface CertificateDetails {
  iecNumber: string;
  firmName: string;
  concernType: string;
  issueDate: string;
  address: string;
  signatory: string;
  issuedBy: string;
}

const certificateData: CertificateDetails = {
  iecNumber: "NOBPS9469P",
  firmName: "AI ENTERPRISE",
  concernType: "Proprietorship",
  issueDate: "15/07/2025",
  address:
    "Madhiya road plot no 28/F vikror rolling mill above kumbharwada, Bhavnagar, BHAVNAGAR, GUJARAT, 364006",
  signatory: "Mustafa S SheikhMansuri",
  issuedBy: "Director General of Foreign Trade, India",
};

const CertificateSection: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Certificates
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          This certificate is issued by the Directorate General of Foreign Trade
          (DGFT), Ministry of Commerce and Industry, Government of India. It
          serves as an official authorization for businesses to engage in import
          and export activities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Certificate Image */}
          <div className=" justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              <Image
                src="/media/images/aboutus/certificate.avif" // put your image in /public/media/
                alt="IEC Certificate"
                width={400}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Certificate Details */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Details</h3>
            <ul className="space-y-3 text-gray-200 text-base">
              <li>
                <strong>• IEC Number:</strong> {certificateData.iecNumber}
              </li>
              <li>
                <strong>• Firm Name:</strong> {certificateData.firmName}
              </li>
              <li>
                <strong>• Nature of Concern:</strong>{" "}
                {certificateData.concernType}
              </li>
              <li>
                <strong>• Issue Date:</strong> {certificateData.issueDate}
              </li>
              <li>
                <strong>• Registered Address:</strong> {certificateData.address}
              </li>
              <li>
                <strong>• Signatory:</strong> {certificateData.signatory}
              </li>
              <li>
                <strong>• Issued By:</strong> {certificateData.issuedBy}
              </li>
            </ul>

            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-2">Importance</h4>
              <p className="text-gray-300 mb-4">
                The IEC is a mandatory requirement for any individual or
                business involved in international trade in India. It enables
                the holder to clear customs, obtain benefits under foreign trade
                policies, and conduct global transactions seamlessly.
              </p>

              <h4 className="text-xl font-semibold mb-2">Verification</h4>
              <p className="text-gray-300">
                This is a system-generated certificate. For authenticity, verify
                details at the official DGFT website (
                <a
                  href="https://dgft.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  https://dgft.gov.in
                </a>
                ) under Services &gt; View Any IEC Details, or scan the QR code
                provided on the certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
