import React from 'react';
import BackToBlog from '../../Components/Blog/BackToBlog';
import BlogGlobalStyles from '../../Components/Blog/BlogGlobalStyles';
import BlogSignOff from '../../Components/Blog/BlogSignOff';

const FirstPost = () => {
  return (
    <React.Fragment>
      <BlogGlobalStyles />
      <main className="blog__main">
        <section className="blog__section hide-scrollbar__blog">
          <BackToBlog />
          <h2 className="blog__heading">helloWorld</h2>
          <p className="blog__text">
            This is my first blog post! Exciting, but new territory for me -- we'll see how ling I can actually keep
            this up. I've always liked writing, hence the History/English Degree, but have never enjoyed putting my
            writing out on the internet. I guess it never felt like I needed to share anything - which I don't think has
            changed to be honest. The difference in motivation to start this is really born out of wanting a personal
            website! Since I AM a web developer I DO have the tools to do that. No excuse now really.
          </p>

          <p className="blog__text">
            I think that I can accept the fact that I expect low traffic on this site overall, and generally don't
            expect tons of interest in my own ramblings. With that in mind this is really for myself. Like I said - I
            enjoy writing. I suppose if I had a goal with this blog it would be that I intend on writing based on what
            I'm doing at the moment, whether that be a book I'm reading, some Web-Dev stuff I've been thinking/working
            through, or some outdoorsy-Vancouver type stuff I have going on. Simple enough, but I'm thinking that'll be
            the bulk ov the content here.
          </p>
          <p className="blog__text">
            If that's not interesting to you I don't really have much to say about that, don't read I guess. Sorry, not
            sorry.
          </p>
          <p className="blog__text">
            I can recognize this seems like a minimalistic first post, so I'll highlight the motivation, current
            progress, goal, and next steps for this site.
          </p>
          <p className="blog__text">
            Motivation: Honestly this is a simple one -- boredom. I've been struggling with boredom here in my tiny
            Vancouver Appartment during COVID. It doesn't help that I work from home, live with my partner (never leave
            my place to go elsewhere), follow the COVID restrictions as strictly as I can, and was generally stuck in a
            rut of just watching TV tons. So I decided to learn something new (Gatsby.js), and make a personal website!
          </p>
          <p className="blog__text">
            Current Progress: We're definitely in the infancy of this page at the moment. LIke I said above, I'm taking
            this as a learnign opportunity, meaning I'm slowly working through aspects of Gatsby to see how it all
            works. I think the first day I was messing around here I only was playing with the routing in Gatsby. Then
            it was styled components. I think I'll be slowly making progress here as I dive into extra plugins and other
            aspects of Gatsby I'm curious about. Who knows, maybe I'll even hook up stripe for donations (LOL). That was
            really rambling -- basically I have routing, a header, and styles for blogs moving forward, which I'll
            expand on as I need different sections within blogs.
          </p>
          <p className="blog__text">
            Goal: I guess the final goal is to deploy this site on AWS -- not because I think I need AWS to host this
            site, but because I'm trying to become certified as a Cloud Solutions Architect on AWS and this would be a
            good way to practive some of those architetural skills I'm trying to build. Aside from that I'm just making
            a basic page with a about me section, a contact section, a small portfolio, the blog (of course), links to
            socials, and I suppose I'll drop my resume somewhere. I think a side-goal is that if I start to get into the
            habit of writing I may post blogs, with meaningful content, to Medium or something. That's a little ways
            down the line thought.
          </p>
          <p className="blog__text">
            Next steps: I'm a little conflicted here because I'm not overly creative (notice my *wonderful* designs),
            and don't have clear ideas for any other page on this site. Currently I'm feeling like I either want to make
            base styles for the other pages, or just work on the Contact/About page (either one) in order to keep
            progress marching on.
          </p>
          <BlogSignOff timestamp="March 4, 2021" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default FirstPost;
