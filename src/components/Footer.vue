<template>
  <section id="footer" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-6">
          <div class="footer-widget footer-link">
            <h4>Quick links</h4>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/member">Member</router-link>
              </li>
              <li>
                <router-link to="/publication">Publication</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
          <div class="footer-widget footer-text">
            <h4>Our contact</h4>
            <p class="mail">
              <span>Mail:&nbsp;</span>
              <a :href="email">{{ email }}</a>
            </p>
            <p>
              <span>Location:&nbsp;</span>
              {{ location }}
            </p>
            <p>
              <span>Homepage:&nbsp;</span>
              <a :href="homepage" target="_blank">{{ homepage }}</a>
            </p>
            <p>
              <span>Github:&nbsp;</span>
              <a :href="github" target="_blank">{{ github }}</a>
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
          <div class="footer-widget footer-text">
            <h4>Webmaster</h4>
            <p v-for="email in webmasters" :key="email.id" class="mail">
              <a :href="'mailto:'+email">{{ email }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="footer-copy">&copy; 2019 DataHammer. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contact from "@/data/contact.json";

export default {
  name: "Footer",
  data() {
    return contact;
  }
};
</script>

<style scoped>
#footer {
  padding-bottom: 60px;
  position: relative;
  background-image: url("../assets/img/footer.png");
  border-top: 1px solid#eee;
}

.footer-widget ul li {
  padding: 5px 0px;
}

.footer-widget p {
  margin-bottom: 5px;
}

.footer-widget h4 {
  margin-bottom: 20px;
}

.footer-widget h4 span {
  color: #635cdb;
  display: block;
  font-size: 60px;
  line-height: 60px;
}

.footer-blog li img {
  width: 70px;
  height: 70px;
  float: left;
  margin-right: 20px;
}

.footer-blog li h5 {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
}

.footer-blog li a.read-more {
  font-size: 13px;
}

.footer-blog li {
  margin-bottom: 15px;
}

.footer-copy {
  letter-spacing: 1px;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid#eee;
}

.footer-text h6 {
  margin-bottom: 10px;
}

.footer-text p span {
  color: #000;
}

.footer-text p.mail {
  color: #635cdb;
}

.bg-main {
  background: #f4f8fb;
}

.footer-widget a {
  color: #999;
}
</style>
