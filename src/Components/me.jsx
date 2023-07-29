
function AboutMe()
{
    const goToLinkedIn = () => {
        window.location.assign('https://www.linkedin.com/in/sadzida-dziho-316b90254/'); 
      };
    
      const goToFacebook = () => {
        window.location.assign('https://www.facebook.com/sadzida.dziho/?locale=hr_HR'); 
      };
      const goToInstagram = () => {
        window.location.assign('https://www.instagram.com/sadzadzadzida/'); 
      };
      const goToGithub = () => {
        window.location.assign('https://github.com/Dzadzax27'); 
      };

    return <div id="Me">
        <div id="Info"><img id="image"src="https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.15752-9/356538346_860375888950625_1434732799619883327_n.jpg?stp=dst-jpg_p2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rm-Zt2j4eI8AX-BRr_8&_nc_ht=scontent.ftzl2-1.fna&oh=03_AdReaV9KBlKKshx03zMUh3g_acaFDlzdiNEaceSESoYJRA&oe=64D8DE94">
            </img>
            <label id="Title">Osnovne informacije</label>
            <label id="OtherInfo">Pozdrav! 
            Zovem se Sadžida Džiho i dolazim
             iz Mostara.
        <br/> Studentica sam Fakulteta
         informacijskih tehnologija na Univerzitetu Džemal Bijedić</label>
            </div>
        <div className="Links">
            <div className="Logoes">
            <img onClick={goToLinkedIn} id="LinkedIn" 
            src="https://www.freepnglogos.com/uploads/linkedin-logo-black-png-image-21.png"></img>
            <img onClick={goToFacebook} id="fb"src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-best-facebook-logo-icons-gif-transparent-png-images-9.png"></img>
            <img onClick={goToInstagram} id="Ig"src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-5.png"></img>
            <img onClick={goToGithub} id="Git"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            </div>
            </div>
    </div>
}
export default AboutMe;