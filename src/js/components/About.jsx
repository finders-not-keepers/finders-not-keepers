var React = require('react');

var About = React.createClass({
    render: function() {
        return(
            <div>
            <h2>About the project:</h2>
            <hr/>
            <p className="text-justify">Finder Not Keepers is meant to digitize lost and found 
            bins located at businesses. Too often do we lose our valuables in public places 
            which forces us to go on a frantic search for our lost item. Many phone calls 
            as well as physical visits are required to retrace our steps in the hope of 
            finding our item. Now, with Finders Not Keepers, you can do all of these 
            tedious forensics from the palm of your hand. 
            </p>
            <br/>
            <p className="text-justify">
            Under the hood, Finders Not Keepers is the best examples of all the modern 
            tools we have learned in the course of the <a className="decodeMTL" href="https://www.decodemtl.com/">DecodeMTL</a> bootcamp. On the front-end, we 
            used HTML5, Bootstrap, and React. While on the backend we used ExpressJS, MySql, 
            and third party tools like auth0.</p>
            <br/>
            <h2>About the creators:</h2>
            <hr/>
            <div className="row">
                <div className="col-xs-12 profiles">
                    <div className="col-lg-4 col-md-4">
                        <a href="https://github.com/cbroomhead"><img src="img/celine.png" className="profileImg" /></a>
                        <h3 className="text-center whiteText ">Céline Broomhead</h3>
                        <br/>
                        <h5 className="whiteText">ABOUT ME:</h5>
                        <p className="text-justify">
                        I am originally from San Francisco and came to Montreal specifically for
                        the DecodeMTL bootcamp. Back at home, I enjoy a wide range of
                        physical and mental activities which challenge me on a daily basis. I
                        have a natural curiosity towards trying new things and keep an open
                        mind to everything and everyone. I consider myself to be an epicurean
                        and often seek the outdoors, food, music, and the arts. </p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <a href="https://github.com/klingat"><img src="img/kash.JPG" className="profileImg" /></a>
                        <h3 className="text-center whiteText ">Katarina Lingat</h3>
                        <br/>
                        <h5 className="whiteText">ABOUT ME:</h5>
                        <p className="text-justify">My name is Katarina, better known as Kash. I grew up on a ski hill,
                        which would explain why I learned to ski before I could walk. Skiing
                        made me love going fast and inspired me to reach new heights, literally.
                        Learning to fly planes has taught me how to work under pressure. Math
                        was my strongest subject in school and I love solving problems. I also
                        like working on projects, whether it’s a DIY or a coding challenge. </p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <a href="https://github.com/paulinerousseau"><img src="img/pauline.png" className="profileImg" /></a>
                        <h3 className="text-center whiteText ">Pauline Rousseau</h3>
                        <br/>
                        <h5 className="whiteText">ABOUT ME:</h5>
                        <p className="text-justify">My name is Pauline, I was born in France, lived in England for several
                        years and moved to Canada nearly 6 years ago. I graduated in English
                        Language but soon decided to take a different path. I love food and
                        everything related to it. </p>
                    </div>
                    
                </div>
            </div>
            </div>
            )
    }
    
})

module.exports = About