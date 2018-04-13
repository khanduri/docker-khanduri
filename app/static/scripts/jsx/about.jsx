import ReactDOM from 'react-dom';

/* About */
function AboutPrashantComponent() {
    return (
        <section className="content-section text-center about">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>About Me</h2>
              <p>Hi there! I'm Prashant Khanduri</p>
              <p>I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)</p>
              <p>On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for <a href='#' ng-click="scroll('#experience')">some of it</a>, the other portion ends up on a <a href="https://github.com/khanduri/">public domain</a></p>
              <p>I also <a href="http://khanduri.github.io/">blog</a>, but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge</p>
              <p></p>
              <p>In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though</p>
              <p>You know a lot about me now! .. <a href='#contact' className="page-scroll">Ok your turn</a></p>
            </div>
          </div>
        </section>
    )
}

function AboutPuneetComponent(){
    return (
        <section className="content-section text-center about">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>About Me</h2>
              <p>Hi there! I'm Puneet Khanduri</p>
              <p>I have done a ton of different things and "full-stack" means something different to me than most other folks.</p>
              <ul className="about-ul">
                <li>I started with designing parts of microprocessors</li>
                <li>then multi-chip modules using advanced interconnect technologies,</li>
                <li>shared memory systems spanning entire datacenters,</li>
                <li>custom networking protocols,</li>
                <li>embedded applications for small footprint JVMs,</li>
                <li>mobile and web applications,</li>
                <li>large scale distributed systems,</li>
                <li>libraries and tools used by engineers across the world,</li>
                <li>and machine learning.</li>

              </ul>
            </div>
          </div>
        </section>
    )
}

if (info.about == 'prashant'){
  ReactDOM.render(<AboutPrashantComponent />, document.getElementById('about'));
}

if (info.about == 'puneet'){
  ReactDOM.render(<AboutPuneetComponent />, document.getElementById('about'));
}
