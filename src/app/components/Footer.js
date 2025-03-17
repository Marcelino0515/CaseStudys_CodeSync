import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <Image src="/img/logo_1.3_light_en.svg" alt="logo" width={200} height={70} />
            <p>
            Empowering businesses with cutting-edge AI, cloud, and immersive tech solutions. Step into the future where innovation meets simplicity.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Product</h2>
                  <ul>
                    <li>
                      <Link href="/examples">Examples</Link>
                    </li>
                    <li>
                      <Link href="/integrations">Integrations</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Connect</h2>
                  <ul>
                    <li>
                      <Link href="#">Twitter</Link>
                    </li>
                    <li>
                      <Link href="#">Github</Link>
                    </li>
                    <li>
                      <Link href="#">Discord</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row gy-2">
            <div className="col-md-6 align-self-center">
              <p>Copyright © {new Date().getFullYear()} Codesync LLC. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
