import React from 'react';
import MainTextGlobalStyles from '../../Components/About/AboutTextGlobalStyles';
import BackgroundImage from '../../Assets/homepage.jpeg';
import BackToBlog from '../../Components/Blog/BackToBlog';
import BlogSignOff from '../../Components/Blog/BlogSignOff';

const ImposterSyndrome = () => {
  return (
    <React.Fragment>
      <MainTextGlobalStyles />
      <main className="main__content">
        <img className="background__image" src={BackgroundImage} alt="background__image" />

        <section className="text__block hide-scrollbar__blog">
          <BackToBlog />
          <h1 className="text__heading">Developing with Imposter Syndrome</h1>

          <p className="inner__text">
            Importer syndrome is real. I know it -- if you're reading this you probably know it as well. I don't want to
            hide from that, or act as if I know all the answers to dealing with Importer Syndrome (quick tip - I don't).
            I want to share my mindset and the strategies I take in order to alleviate the negative impacts of imposted
            syndrome on my own mental health.
          </p>
          <p className="inner__text">
            To start, I think context is important. I am 14 months out from my time at a coding bootcamp (BrainStation
            Vancouver to be specific). I've been working for the past 9-10 months, depending on how you round. My job
            title is CTO, which says more about the size of my company than any technical ability you may THINK I have.
            Oh, and I have an undergrad degree that includes a History Major along with an English Minor. You could say
            that I carry some technical debt there...
          </p>

          <p className="inner__text">
            Like I said earlier, imposter syndrome is REAL. I felt it during my bootcamp, while I was looking for work,
            and every day since. The only thing that's changed is how I handle it. I think the hardest part for me is
            feeling like I don't know enough. Especially considering my job title, it's really easy to fall into the
            negative cycle of beating myself up over my lack of knowledge. There is one way to counteract that -- learn
            things. For me, this is important because you will never be able to learn all the things you **think** you
            should know within a span of a few days or a few weeks. It's likely going to take months, but possibly
            longer, to learn the concepts that overwhelm you at any one point in time. I have learned to take comfort in
            the incremental progress I can make in an hour, or 30 minutes even. I take the approach that if I learn 'x'
            amount every day I will eventually get there. Patience is key, but it allows me to take comfort in the
            grind. Rome wasn't built in a day and neither can your technical knowledge. That's okay. Even if the things
            you learn today don't feel like they're helping, it's a part of the process.
          </p>

          <p className="inner__text">
            Another thing I do to help my imposter syndrome is to spend time focusing on myself outside of the tech
            space. It may feel like I'm off topic here, but it's a means to an end. I focus on reading consistently and
            working on my body (trying to stay in better shape than I did when quarantine hit). The key here for me is
            allowing myself to have, and forcing myself to take, space outside of the tech work I do. It's important for
            me because this space allows me to get lost in other things - expand my mind elsewhere, focus on exercise
            for a while. This is not only a (necessary) distraction for me, but also something that I get value from and
            see get a sense of self-worth from. This leads me to my last point.
          </p>

          <p className="inner__text">
            Imposter syndrome hit me the hardest when I felt like this was the only thing I had going for me, and even
            in that I was failing. It was when I was looking for my first job post-bootcamp. I want to preface the rest
            of this by saying I was in a good situation and had minimal external stressors, which I know can complicate
            the picture. I don't want to minimize that struggle for anybody else out there. For me, though, I got caught
            in the feeling that my self-worth was tied to my ability as a developer and, in turn, my ability to support
            myself through development. The exercise and the reading help me get a piece of that back. It not only
            distracts me from the dev work, but reminds me that I have more in my life than just this, and that I my
            value cannot be measured solely by my dev skills -- despite what job searching and salary negotiations do to
            my psyche. Regardless, I am more than just a developer. So in that sense, when I do have feelings of
            importer syndrome bubbling up it is much easier for me to take a breath and let go of that - I feel like
            even if I may not be the best developer I can still be a good person and still be worth more than nothing.
          </p>

          <p className="inner__text">
            That was a ramble, I know. Cheers to any of y'all who have made it this far, I hope you can take something
            positive from my experiences.
          </p>

          <BlogSignOff timestamp="March 16, 2021" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default ImposterSyndrome;
