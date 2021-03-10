import React from 'react';
import BackToBlog from '../../Components/Blog/BackToBlog';
import BlogGlobalStyles from '../../Components/Blog/BlogGlobalStyles';
import BlogSignOff from '../../Components/Blog/BlogSignOff';

const SummerExcitement = () => {
  return (
    <React.Fragment>
      <BlogGlobalStyles />
      <main className="blog__main">
        <section className="blog__section hide-scrollbar__blog">
          <BackToBlog />
          <h2 className="blog__heading">Summer Excitement</h2>
          <p className="blog__text">
            It's March 7 as of writing this. That means Vancouver is starting to warm up a bit. It never gets cold cold
            here - the type to freeze your hair and make you thing -5 Celcius is balmy - but it's still nice to see
            March come and bring more daylight. For me the killer of the winter out here isn't the cold, it's the
            darkness. Not only does it get dark so early - for real, I forget how far North Vancouver is until I look on
            a map - but it rains almost all winter. The rain itslef is fine, I mean at least it's not cold enough to
            snow much, but the fact that it's relentless and we seemingly get 5 days of sunlight from Haloween until St.
            Patty's can really put a damper (no pun intended) on your day.
          </p>

          <p className="blog__text">
            Buuuuuuuut, since it's March, I get to look ahead and begin plans for the summer. The first thing I do is
            think about last summer, gotta remember what I loved most last time to get some inspiration for this
            summer's plans. I think about camping trips, AirBnbs (as COVID friendly as was possible - sorry nobody's
            perfect), long hikes, evening hikes, beach days, bikes around the Sea Wall, and want to do ALL of it again.
            This is why we plan...
          </p>

          <p className="blog__text">
            First on the plate is a hopeful trip to beautiful Cali. No, not the L.A. or San Fran trip to take in a new
            city, but this one is a trip to Yosemite. I've been before, I forget which year, but it was a family trip -
            one iteration of a Winter's summer trip out West. It was stunning, but we went before I really appreciated
            what I got to see on those trips. It was definitely one of the first memorable ones though. I still remember
            hiking down the valley, stopping right about where Ansel Adams must have taken that beautiful photo of
            Yosemite Valley (seriosuly, you should google it if you don't know what I'm talking about). Anyway, enough
            reminiscing - the idea behind this trip is to hike Half Dome with my Dad. He was the primary driver for all
            our trips out west, and I'll always owe my love of the outdoors and hiking to him. He's getting up there in
            years and Half Dome is no joke of a hike. Single day, 16 miles (~26 km), 4500 feet of elevation gain (~1400
            meters), and a rock face over the last bit so steep they put a walkway surrounded by cables up to avoid
            injuries. Last time we tried to do a hike like that we both got altitude sickness - although to be fair that
            hike ended 6000 feet higher than Half Dome and we had both been at sea level 2 days before attempting, not
            our brightest idea.
          </p>

          <p className="blog__text">
            I hope you get the picture, that should be a sweet hike. If we can get permits and COVID is somewhat
            tolerable by then, you'll find me on Half Dome sometime in late July.
          </p>

          <p className="blog__text">
            I won't go on too long about all the plans for this summer, but another couple I REALLY need to do are the
            Chief and St. Marks. The Chief is one I've never done before, which pains me to say considering it's been on
            my list for two years and would be an easy morning. I'm hoping to do it a few times though, at least once
            with my sister - a BIG hiker, I bet she'd do it three times in a day with me if I wanted to - once with my
            girlfriend - we've been talking about it for years, and at least once just cause. St. Marks is similar. I
            did it last August, as you may have seen on the homepage, with a friend after work one day. It's a nice hike
            (~12km) with a STUNNING view from the top. I've been to a lot of summits, but none quite like it. There's
            something magic about getting to the top of a mountain and looking out to the setting sun over the Pacific
            Ocean. Surreal. Anyway, I'm DEFINITELY going to do that again, at least once. What makes it so appealing to
            me it that it's a hike that most people would avoid doing during the week (cause most websites say it takes
            ~5 hours), but I can do in under 3 - a rewarding hike that can be done after a work day.
          </p>

          <p className="blog__text">
            I guess I mentioned so much more that I did last summer and want to do again. Don't worry, I haven't
            forgotten about that, but I'll leave it for another day. Plans are in the calendar, but we'll get there in
            due time.
          </p>
          <BlogSignOff timestamp="March 7, 2021" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default SummerExcitement;
