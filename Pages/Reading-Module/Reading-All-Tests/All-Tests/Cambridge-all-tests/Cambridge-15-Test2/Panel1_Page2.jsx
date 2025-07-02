import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";


function Panel1Q_2() {
  return (
    <section className='mainSection p-4 mb-[50px]'
      onMouseDown={() => {
        // console.log(window.getSelection().toString());
        makeEditableAndHighlight("green");
      }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 2 <br /> READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on <span className='font-bold'>Questions 14-26</span> which are based on Reading Passage 2 below. </h5> <br />

        </div>
      </div>
      <div className='main-Passages'>
        <h5 className='text-center'>Should we try to bring extinct species back to life?</h5> <br />
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>The passenger pigeon was a legendary species. Flying in vast numbers across North America, with potentially many millions within a single flock, their migration was once one of nature’s great spectacles. Sadly, the passenger pigeon’s existence came to an end on 1 September 1914, when the last living specimen died at Cincinnati Zoo. Geneticist Ben Novak is lead researcher on an ambitious project which now aims to bring the bird back to life through a process known as ‘de-extinction’. The basic premise involves using cloning technology to turn the DNA of extinct animals into a fertilised embryo, which is carried by the nearest relative still in existence – in this case, the abundant band-tailed pigeon – before being born as a living, breathing animal. Passenger pigeons are one of the pioneering species in this field, but they are far from the only ones on which this cutting-edge technology is being trialled.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>In Australia, the thylacine, more commonly known as the Tasmanian tiger, is another extinct creature which genetic scientists are striving to bring back to life. ‘There is no carnivore now in Tasmania that fills the niche which thylacines once occupied,’ explains Michael Archer of the University of New South Wales. He points out that in the decades since the thylacine went extinct, there has been a spread in a ‘dangerously debilitating’ facial tumour syndrome which threatens the existence of the Tasmanian devils, the island’s other notorious resident. Thylacines would have prevented this spread because they would have killed significant numbers of Tasmanian devils. ‘If that contagious cancer had popped up previously, it would have burned out in whatever region it started. The return of thylacines to Tasmania could help to ensure that devils are never again subjected to risks of this kind.’</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>If extinct species can be brought back to life, can humanity begin to correct the damage it has caused to the natural world over the past few millennia? ‘The idea of de-extinction is that we can reverse this process, bringing species that no longer exist back to life,’ says Beth Shapiro of University of California Santa Cruz’s Genomics Institute. ‘I don’t think that we can do this. There is no way to bring back something that is 100 per cent identical to a species that went extinct a long time ago.’ A more practical approach for long-extinct species is to take the DNA of existing species as a template, ready for the insertion of strands of extinct animal DNA to create something new; a hybrid, based on the living species, but which looks and/or acts like the animal which died out.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>
            This complicated process and questionable outcome begs the question: what is the actual point of this technology? ‘For us, the goal has always been replacing the extinct species with a suitable replacement,’ explains Novak. ‘When it comes to breeding, band-tailed pigeons scatter and make maybe one or two nests per hectare, whereas passenger pigeons were very social and would make 10,000 or more nests in one hectare.’ Since the disappearance of this key species, ecosystems in the eastern US have suffered, as the lack of disturbance caused by thousands of passenger pigeons wrecking trees and branches means there has been minimal need for regrowth. This has left forests stagnant and therefore unwelcoming to the plants and animals which evolved to help regenerate the forest after a disturbance. According to Novak, a hybridized band-tailed pigeon, with the added nesting habits of a passenger pigeon, could, in theory, re-establish that forest disturbance, thereby creating a habitat necessary for a great many other native species to thrive.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Another popular candidate for this technology is the woolly mammoth. George Church, professor at Harvard Medical School and leader of the Woolly Mammoth Revival Project, has been focusing on cold resistance, the main way in which the extinct woolly mammoth and its nearest living relative, the Asian elephant, differ. By pinpointing which genetic traits made it possible for mammoths to survive the icy climate of the tundra, the project’s goal is to return mammoths, or a mammoth-like species, to the area. ‘My highest priority would be preserving the endangered Asian elephant,’ says Church, ‘expanding their range to the huge ecosystem of the tundra. Necessary adaptations would include smaller ears, thicker hair, and extra insulating fat, all for the purpose of reducing heat loss in the tundra, and all traits found in the now extinct woolly mammoth.’ This repopulation of the tundra and boreal forests of Eurasia and North America with large mammals could also be a useful factor in reducing carbon emissions – elephants punch holes through snow and knock down trees, which encourages grass growth. This grass growth would reduce temperature, and mitigate emissions from melting permafrost.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> While the prospect of bringing extinct animals back to life might capture imaginations, it is, of course, far easier to try to save an existing species which is merely threatened with extinction. ‘Many of the technologies that people have in mind when they think about de-extinction can be used as a form of “genetic rescue”,’ explains Shapiro. She prefers to focus the debate on how this emerging technology could be used to fully understand why various species went extinct in the first place, and therefore how we could use it to make genetic modifications which could prevent mass extinctions in the future. ‘I would also say there’s an incredible moral hazard to not do anything at all,’ she continues. ‘We know that what we are doing today is not enough, and we have to be willing to take some calculated and measured risks.’
          </p>
        </div>
      </div> <br />

      <div className='text-inherit mt-5'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>READING PASSAGE 3</div> <br />
          <h5>You should spend about 20 minutes on <span className='text-xl font-bold'>Questions 27-40</span> which are based on Reading Passage 3 below.</h5> <br />
        </div>
      </div>
      <div className='main-Passages'>
        <h5 className='mt-1 mb-2 text-center'>Having a laugh</h5>
        <i className='text-center mb-2'>The findings of psychological scientists reveal the importance of humour</i>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>Humans start developing a sense of humour as early as six weeks old, when babies begin to laugh and smile in response to stimuli. Laughter is universal across all human cultures and even exists in some form in rats, chimps, and bonobos. Like other human emotions and expressions, laughter and humour psychological scientists with rich resources for studying human psychology, ranging from the development of language to the neuroscience of social perception.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>Theories focusing on the evolution of laughter point to it as an important adaptation for social communication. Take, for example, the recorded laughter in TV comedy shows. Back in 1950, US sound engineer Charley Douglass hated dealing with the unpredictable laughter of live audiences, so started recording his own ‘laugh tracks’. These were intended to help people at home feel like they were in a social situation, such as a crowded theatre. Douglass even recorded various types of laughter, as well as mixtures of laugher from men, women, and children. In doing so, he picked up on a quality of laughter that is now interesting researchers: a simple ‘haha’ communicates a remarkable amount of socially relevant information.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>In one study conducted in 2016, samples of laughter from pairs of English-speaking students were recorded at the University of California, Santa Cruz. A team made up of more than 30 psychological scientists, anthropologists, and biologists then played these recording to listeners from 24 diverse societies, from indigenous tribes in New Guinea to city-dwellers in India and Europe. Participants were asked whether they thought the people laughing were friends or strangers. On average, the results were remarkably consistent: worldwide, people’s guesses were correct approximately 60% of the time.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>Researchers have also found that different types of laughter serve as codes to complex human social hierarchies. A team led by Christopher Oveis from the University of California, San Diego, found that high-status individuals had different laughs from low-status individuals, and that strangers’ judgements of an individual’s social status were influenced by the dominant or submissive quality of their laughter. In their study, 48 male college students were randomly assigned to groups of four, with each group composed of two low-status members, who had just joined their college fraternity group, and two high-status members, older student took a turn at being teased by the others, involving the use of mildly insulting nicknames. Analysis revealed that, as expected, high-status individuals produced more dominant laughs and fewer submissive laughs relative to the low-status individuals. Meanwhile, low-status individuals were more likely to change their laughter based on their position of power; that is, the newcomers produced more dominant laughs when they were in the ‘powerful’ role of teasers. Dominant laughter was higher in pitch, louder, and more variable in tone than submissive laughter.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>A random group of volunteers then listened to an equal number of dominant and submissive laughs from both the high- and low-status individuals, and were asked to estimate the social status of the laughter. In line with predictions, laughers producing dominant laughs were perceived to be significantly higher in status than laughers producing submissive laughs. ‘This was particularly true for low-status individuals, who were rated as significantly higher in status when displaying a dominant versus submissive laugh,’ Oveis and colleagues note. ‘Thus, by strategically displaying more dominant laughter when the context allows, low-status individuals may achieve higher status in the eyes of others.’ However, high-status individuals were rated as high-status whether they produced their natural dominant laugh or tried to do a submissive one.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span>Another study, conducted by David Cheng and Lu Wang of Australian National University, was based on the hypothesis that humour might provide a respite from tedious situations in the workplace. This ‘mental break’ might facilitate the replenishment of mental resources. To test this theory, the researchers recruited 74 business students, ostensibly for an experiment on perception. First, the students performed a tedious task in which they had to cross out every instance of the letter ‘e’ over two pages of text. The students then were randomly assigned to watch a video clip eliciting either humour, contentment, or neutral feelings. Some watched a clip of the BBC comedy Mr. Bean, others a relaxing scene with dolphins swimming in the ocean, and others a factual video about the management profession.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>The students then completed a task requiring persistence in which they were asked to guess the potential performance of employees based on provided profiles, and were told that making 10 correct assessments in a row would lead to a win. However, the software was programmed such that is was nearly impossible to achieve 10 consecutive correct answers. Participants were allowed to quit the task at any point. Students who had watched the Mr. Bean video ended up spending significantly more time working on the task, making twice as many predictions as the other two groups.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>H</span>Cheng and Wang then replicated these results in a second study, during which they had participants complete long multiplication questions by hand. Again, participants who watched the humorous video spent significantly more time working on this tedious task and completed more questions correctly than did the students in either of the other groups.

            ‘Although humour has been found to help relieve stress and facilitate social relationships, traditional view of task performance implies that individuals should avoid things such as humour that may distract them from the accomplishment of task goals,’ Cheng and Wang conclude. ‘We suggest that humour is not only enjoyable but more importantly, energising.’
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1Q_2