
import { BsEnvelope, BsPhone, BsGeoAlt } from "react-icons/bs";

export default function ContactInfo() {
  return (
    <div>
      <h3
        className="text-white text-lg font-heading font-semibold mb-4"
      >
        Contact
      </h3>
      <ul className="space-y-2 font-body">
        <li className="flex items-center">
          <BsEnvelope className="text-secondary mr-2" />
          <a href="mailto:contact@kodazen.com" className="hover:text-secondary transition-colors">contact@kodazen.com</a>
        </li>
        <li className="flex items-center">
          <BsPhone className="text-secondary mr-2" />
          <span>+33 6 12 34 56 78</span>
        </li>
        <li className="flex items-center">
          <BsGeoAlt className="text-secondary mr-2" />
          <span>Paris, France</span>
        </li>
      </ul>
    </div>
  );
}

