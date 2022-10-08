import "./style.css";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="BagusDP"/>
      <title>BagusDP Portofolio</title>
      <meta
        name="description"
        content="Mini portofolio of Bagus Dwi Putra or also known as GusbaXD. 
        I hope this is enough to show that I am understand how to create basic 
        front-end related knowledge. Please help me improve my skills."
      />
      <div id="navbar">
        <div>
          <a href="#mainpage"> Mainpage </a>
        </div>
        <div>
          <a href="#education"> Education </a>
        </div>
        <div>
          <a href="#workExp"> Work Experience </a>
        </div>
        <div>
          <a href="#contactMeBox"> Contact Me </a>
        </div>
      </div>
      <div id="mainpage">
        <div>
          <img
            className="profile"
            src={require("./assets/profile.jpg")}
            alt="Photo di Bromo"
            width="150%"
            height="150%"
          />
        </div>
        <div>
          <p className="titleName"> Bagus Dwi Putra</p>
          <p className="titleSub"> An IT Enthusiast</p>
          {/* <p className="titleSub"> To</p> */}
          <p style={{ fontWeight: "bold", fontSize: 24 }}> Contact Details </p>
          <p className="titleDesc">
            Batam, Kepulauan Riau <br />
            Phone: 081278732817 <br />
            Email: bagusdp2011@email.com <br />
          </p>
        </div>
      </div>
      <p style={{ fontSize: 40 }}>
        <b>Professional Summary </b>
      </p>
      <div id="proSumm">
        <div className="kosongkiritengah" />
        <div className="proSummDetails">
          Experienced hands on working as a Field Service Engineer. Expertise in
          performing troubleshoot and operational on equipments and machines of
          the trade with priority on customer service skills. Accomplished to
          finish multiple projects of machines. Ready to be challenged to learn
          more, and to grow and further improve my skills. Trying to shifting
          career to IT programmer around Data Analyst / Fullstack / Front-End
          Dev / Back-End Dev.
        </div>
        <div className="kosongkanantengah" />
      </div>
      <p style={{ fontSize: 40 }}>
        <b> Education </b>
      </p>
      <div id="education">
        <div className="kosong" />
        <div>
          <img
            src={require("./assets/01 purwadhika.png")}
            alt="01 Purwadhika"
            width="100%"
            height="20%"
          />
        </div>
        <div>
          <img
            src={require("./assets/02 bca a.jpg")}
            alt="02 BCAA"
            width="60%"
            height="20%"
          />
        </div>
        <div>
          <img
            src={require("./assets/03 Smkn1.png")}
            alt="03 SMKN 1"
            width="30%"
            height="30%"
          />
        </div>
        <div className="kosong" />
        <div className="kosong" />
        <div className="eduTop">Purwadhika Coding School</div>
        <div className="eduTop">BCA Academy</div>
        <div className="eduTop">SMKN 1 Batam</div>
        <div className="kosong" />
        <div className="kosong" />
        <div className="eduText">
          Sedang mempelajari dunia IT dimana kita membuat sebuah website dan
          program bikinan kita sendiri. Saya harap untuk mendapatkan edukasi
          serta karir yang sangat besar dari sini.
        </div>
        <div className="eduText">
          Disini saya mempelajari berbagai desain model
          bangunan dan pendukungnya. Inti dari jurusan ini adalah untuk
          menggabungkan semua desain dan detail menjadi satu.
        </div>
        <div className="eduText">
          Sekolah SMK favorit dimana saya mempelajari semua hal dengan IT.
          Banyak yang tergiur karena IT paling the best tapi kalau saya sendiri
          karena saya suka IT dari kecil.
        </div>
        <div className="kosong" />
        <div className="kosong" />
        <div className="eduBottom">
          <a href="https://purwadhika.com/">Link ke Purwadhika</a>
        </div>
        <div className="eduBottom">
          <a href="https://www.bcaa.edu.sg/">Link ke BCA Academy</a>
        </div>
        <div className="eduBottom">
          <a href="https://www.smkn1batam.sch.id/home/">Link ke SMKN 1 Batam</a>
        </div>
      </div>
      <p style={{ fontSize: 40 }}>
        <b> Work Experience </b>
      </p>
      <div id="workExp">
        <div className="kosong" />
        <div className="workDetails">
          <p style={{ fontSize: 32 }}>
            <b> Manufacturing Environment </b>
          </p>
          <br />
          <b> PT TREMCO TRYSPECTRA – Batam, Indonesia </b>
          <br />
          Sales &amp; Service Engineer (October 2021 – July 2022)
          <br />
          <ul>
            <li>
              Study customer need and requirements for item that is in query, do
              researches on the specs and then send to Procurement Team. After
              that send the quotation to customer and do follow up until
              purchase order is created by customer.
            </li>
            <li>
              Learn spare part or machines by manual, catalog, and websites
              before having the machine on-site. When machine is ready, do
              overall check and followed by training customer on every detail of
              the machine until customer issued a buy off report.
            </li>
            <li>
              Visit customer and local companies that sell 2nd hand machine to
              do check, troubleshoot, and contribute idea on how to improve the
              machines and analyze the machine worth to invest.
            </li>
            <li>
              Create a complete report with the issue and what have been tried
              during troubleshoot of the machine for customer included during
              buy off report.
            </li>
          </ul>
          <br />
          <b> PREMTRONIC SDN BHD – Batam, Indonesia </b> <br />
          Junior Service Engineer (February 2020 - September 2021)
          <br />
          <ul>
            <li>Responds based to customer request or complaints.</li>
            <li>
              Do checking after machine arrives and assists to place the machine
              in line and do installation of the equipment.
            </li>
            <li>
              Analyzes, inspects and reviews findings to determine the problem
              the customer demands. Evaluates and resolves solution to the
              customer.
            </li>
            <li>
              Coordinate work with technical sales and document control team.
            </li>
          </ul>
        </div>
        <div id="manufacture">
          <div>
            <img
              className="manufactureImg"
              src={require("./assets/PCBA.jpg")}
              alt="PBCA Electronics"
            />
          </div>
          <div className="manufactureImgTitle">
            PCBA Electronics Manufacturing
          </div>
          <div className="manufactureAbility"> Machine Knowledge :</div>
          <div id="machineList">
            <div className="kosong" />
            <div>
              <ul>
                <li>Pemtron Korea</li>
                <li>Foresite USA</li>
                <li>Sunmenta China</li>
                <li>Sinik-tek China</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Inline 3D SPI &amp; Inline 3D AOI</li>
                <li>Critical Cleanliness Control</li>
                <li>Stencil Inspection System</li>
                <li>Offline 3D AOI</li>
              </ul>
            </div>
            <div className="kosong" />
          </div>
        </div>
        <div className="kosong" />
      </div>
      <p style={{ fontSize: 40 }}>
        <b> Contact Me </b>
      </p>
      <div id="contactMeBox">
        <div className="kosong" />
        <div>
        
        {/* API Google Maps */}
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Masjid%20Darussalam%20batu%20aji%20batam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br/></div></div>
        
        </div>
        <div className="contactMe">
          <div className="contactMeTitle">
            <b>Talk to me!</b>
          </div>
          <div className="contactMeText"> Contacts Links:</div> <br/>
          <div classname="contactLinksDiv">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20px" height='20px'/>
            <a href="https://www.linkedin.com/in/bagus-dwi-putra/" target="_blank">LinkedIn profile to bagus-dwi-putra</a> <br/>
            <br />
            </div>
            <div classname="contactLinksDiv">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2560px-Gmail_Icon_%282013-2020%29.svg.png" alt="Gmail" width="40px" height='20px'/>
            <a href="mailto:bagusdp2011@gmail.com" target="_blank">Email me an offer to bagusdp2011@gmail.com</a> <br/>
            <br />
            </div>
            <div classname="contactLinksDiv">
            <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="WhatsApp"  width="20px" height='20px'/>
            <a href="http://wa.me/+6281278732817" target="_blank">WhatsApp me a schedule to +6281278732817</a> <br/>
            <br />
            </div>
            <div classname="contactLinksDiv">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GitHub"  width="40px" height='20px'/>
            <a href="https://github.com/BagusDP2011" target="_blank">Spy my GitHub</a> <br/>
            <br />
            </div>
            <div classname="contactLinksDiv">
            <img src="https://dabhobbies.com/wp-content/uploads/2021/01/linktree-logo-350px.jpg" alt="LinkTree"  width="20px" height='20px'/>
            <a href="https://linktr.ee/bagusdp2011" target="_blank">Visit my LinkTree</a> <br/>
            <br />
            </div>
         
        </div>
        <div className="kosong" />
      </div>
      <p style={{ fontSize: 20 }}>Hasil kerjaan GusbaXD </p>
    </>
  );
}

export default App;
