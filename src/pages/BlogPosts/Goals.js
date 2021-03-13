import React from 'react';
import MainTextGlobalStyles from '../../Components/About/AboutTextGlobalStyles';
import BackgroundImage from '../../Assets/homepage.jpeg';
import BackToBlog from '../../Components/Blog/BackToBlog';
import BlogGlobalStyles from '../../Components/Blog/BlogGlobalStyles';
import BlogSignOff from '../../Components/Blog/BlogSignOff';

const Goals = () => {
  return (
    <React.Fragment>
      <MainTextGlobalStyles />

      {/* <BlogGlobalStyles /> */}
      <main className="main__content">
        <img className="background__image" src={BackgroundImage} alt="background__image" />

        <section className="text__block hide-scrollbar__blog">
          <BackToBlog />
          <h1 className="text__heading">Goals</h1>
          <p className="inner__text">
            Going to talk about goals for a little bit. Will try not to be too preachy - I hate that.
          </p>

          <p className="inner__text">
            I've never been one for New Years Resolutions. Call me a Scrooge or something, I don't know. This year was a
            little different. We've all been dealing with COVID and the extra load from that, I'm no different. I really
            felt like I was struggling a bit towards the end of last year. I felt like I wasn't staying in shape well
            enough. I felt in a rut from watching TV every night. Those damn restrictions. So this year was different.
          </p>
          <p className="inner__text">
            I wanted to set goals to change these things in my life, to make them more positive. IN order to do that I
            felt that these goals needed to help me build habits. My thought was that if these goals don't build habits
            I would never continue after the year ended. With that I decided on three main habits to build.
          </p>

          <p className="inner__text">
            1.) Exercise more: I want to build the habit of exercising. With my ability to work remotely it can be easy
            to get lazy and neglect my health. I wanted to change that by building a habit of keeping good cardio. The
            goal was to do a cardio workout once a week. Doesn't have to be crazy and it doesn't have to be long, but I
            have to get some kind of cardio.
          </p>

          <p className="inner__text">
            2.) Read more: I've liked reading since University. This is another thing that is easy to neglect. Reading
            is easiest when I have nothing going on - when I can focus on it. I'm a slow reader and it can take me weeks
            to finish a book. I wanted to build the habit of reading, even if it measn slowly. To accomplish this my
            goal was to 'read one book per week'. This may prove controversial, but that's the idea. Again, the thought
            is that if I can get in the habit of reading a book per month, I can learn to stick to a book past the
            initial few days when I have a lot of free time.
          </p>

          <p className="inner__text">
            3.) Career growth: Build the habit of continuous learning in software development. At the end of last year I
            have been workin gon a course that would help me get an AWS certificate. I had sort of been messing around
            -- not really focusing on it. THe problem is I only spend ~45 minutes on it per day, which means it would
            take me months to get through it. In this sense I broke it down into modules. My goal was to complete one
            module per week until I complete the course.
          </p>

          <p className="inner__text">
            Reminder, the purpose of all these goals was to build better habits. In doing so I can put my head down and
            work on these things, allowing myself to look up every once in a while and see how far I've come and what
            I've done. This is a reflection point. It's March 12.
          </p>

          <p className="inner__text">
            On January 1 my cardio was in terrible shape. I was struggling to go on a relatively short block. THis is
            relative to the amount I could run as a kid and as I moved on to athletics at the University level. Trying
            not to compare my previous shape to current shape. Anyway, I've run every week since, thinking that building
            the tolerance for running will allow me to stay in shape always, as it has such a low barrier to go out and
            do. Just a couple days ago I had the first run where I really felt good. I was breathing fine at the end and
            it was still one of my faster runs. No only that, but I hadn't eaten great food beforehand for a run and I
            was struggling with some cramping from that meal. Still pushed through it totally fine. I would still like
            to build off it, but this was really encouraging and made me feel good about myself.
          </p>

          <p className="inner__text">
            I've read three books now, along with two I'm reading at the moment. All have been good. I'm loving it,
            expecially because of COVID, it's just the perfect way to step away from the world for a while. The year's
            list currently includes Agent SOnya, Bear Necessity, Anxious People, THe Joy of JavaScript, and The 900
            Days. Excited to continue building the list!
          </p>

          <p className="inner__text">
            The AWS course has been good. To be honest I don't know how relvant it will be for work, but it's really
            helped my imposter syndrome by introducing me to new stuff that feels like it's minimizing my technical
            debt. In some ways is it. Anyway, even if I'm not working tons with it at the moment, it's still good to
            know because I'm really enjouying it. That can be an entire career path at the rate we're going right now,
            and I like the creative architecture aspect of it.
          </p>

          <p className="inner__text">
            Like I said, I'm not trying to be too preachy -- just reflecting a bit. In that sense I think I'm realizing
            that I've done a good job so far of building these habits. I'm already seeing benefits from it, so I suppose
            I should put my head back to the grindstone and keep rolling for a while. Will see there the wind take me.
          </p>

          <BlogSignOff timestamp="March 12, 2021" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Goals;
