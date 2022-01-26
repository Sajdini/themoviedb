import React from "react";
import classes from "./Footer.module.css";
function Footer(props) {
  return (
    <section className={classes.contactMe}>
      <div className={classes.contact}>
        <h4>Contact</h4>
        <h4>About Us</h4>
        <button onClick={props.scrollTop}>Back to top</button>
      </div>
    </section>
  );
}

export default Footer;
