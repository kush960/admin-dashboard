import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{' '}
         All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="#">Kushagra</a>
      </div>
    </footer>
  );
}

export default Footer;
