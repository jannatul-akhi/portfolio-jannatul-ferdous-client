import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer id="footer" className="section bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p>
              Designed and built by{" "}
              <a
                href=""
                className="text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jannatul Ferdous
              </a><br />
              <a className="text-sm text-gray-400" href="mailto:jannatulferdous3608@gmail.com">jannatulferdous3608@gmail.com</a>
            </p>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="text-pink-500 hover:text-3xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-pink-500 hover:text-3xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400"
                >
                 <FontAwesomeIcon icon={faGithub} size="2x" className="text-pink-500 hover:text-3xl" />
                </a>
              </li>
            </ul>
          </div>
  
          {/* Bottom Section */}
          <div className="text-center text-sm text-gray-400">
            
            <h3 className="text-lg font-semibold mb-4 md:mb-0">
              © 2024 Jannatul Ferdous. All Rights Reserved.
            </h3>
          </div>
        </div>
      </footer>
    );
};

export default Footer;