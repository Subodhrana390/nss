const footer = () => {
  return (
    <footer class="footer footer_spacing">
      <div class="footer_body">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.989921948153!2d75.8593041756761!3d30.858957174523663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c5bc6cc531%3A0xbe4a6fe42bac9483!2sNational%20Service%20Scheme!5e0!3m2!1sen!2sin!4v1699732694468!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="contact_info">
          <div class="footer_title">
            <h6>CONTACT INFO</h6>
          </div>
          <div class="info_data">
            <div class="address">
              <i class="fa-solid fa-location-dot"></i>
              <p>NSS Office, near workshop, GNDEC Ludhiana, 141006</p>
            </div>
            <div class="email">
              <i class="fa-solid fa-envelope"></i>
              <p>nss.gndec56@gmail.com</p>
            </div>
            <div class="phone">
              <i class="fa-solid fa-phone"></i>
              <p>+91 81466 16043</p>
            </div>
          </div>
        </div>

        <div class="quickLink">
          <div class="footer_title">
            <h6>QUICK LINKS</h6>
          </div>
          <div class="list_item">
            <ul>
              <li>
                <a href="/Pages/about/">About us</a>
              </li>
              <li>
                <a href="/Pages/event/">Event</a>
              </li>
              <li>
                <a href="/Pages/team/">Team</a>
              </li>
              <li>
                <a href="/Pages/links/">Links</a>
              </li>
            </ul>
          </div>
          <div class="social">
            <div class="footer_title">
              <h6>CONNECT WITH US</h6>
            </div>
            <div class="links">
              <a href="https://www.instagram.com/gndecnss/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>© NSS|GNDEC Ludhiana. All Rights Reserved.</p>
        <p>
          Designed and Developed by ~{" "}
          <a
            href="https://www.linkedin.com/in/techscript-roshan/"
            class="active"
            target="_blank"
          >
            Roshan Kumar
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default footer;
