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
        <h5 className='text-center'>Silbo Gomero – the whistle ‘language’ of the Canary Islands</h5> <br />
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>La Gomera is one of the Canary Islands situated in the Atlantic Ocean off the northwest coast of Africa. This small volcanic island is mountainous, with steep rocky slopes and deep, wooded ravines, rising to 1,487 metres at its highest peak. It is also home to the best known of the world’s whistle ‘languages’, a means of transmitting information over long distances which is perfectly adapted to the extreme terrain of the island.

            This ‘language’, known as ‘Silbo’ or ‘Silbo Gomero’ – from the Spanish word for ‘whistle’ – is now shedding light on the language-processing abilities of the human brain, according to scientists. Researchers say that Silbo activates parts of the brain normally associated with spoken language, suggesting that the brain is remarkably flexible in its ability to interpret sounds as language.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> ‘Science has developed the idea of brain areas that are dedicated to language, and we are starting to understand the scope of signals that can be recognised as language,’ says David Corina, co-author of a recent study and associate professor of psychology at the University of Washington in Seattle.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>Silbo is a substitute for Spanish, with individual words recoded into whistles which have high- and low-frequency tones. A whistler – or silbador – puts a finger in his or her mouth to increase the whistle’s pitch, while the other hand can be cupped to adjust the direction of the sound. ‘There is much more ambiguity in the whistled signal than in the spoken signal,’ explains lead researcher Manuel Carreiras, psychology professor at the University of La Laguna on the Canary island of Tenerife. Because whistled ‘words’ can be hard to distinguish, silbadores rely on repetition, as well as awareness of context, to make themselves understood.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>
            The silbadores of Gomera are traditionally shepherds and other isolated mountain folk, and their novel means of staying in touch allows them to communicate over distances of up to 10 kilometres. Carreiras explains that silbadores are able to pass a surprising amount of information via their whistles. ‘In daily life they use whistles to communicate short commands, but any Spanish sentence could be whistled.’ Silbo has proved particularly useful when fires have occurred on the island and rapid communication across large areas has been vital.

            The study team used neuroimaging equipment to contrast the brain activity of silbadores while listening to whistled and spoken Spanish. Results showed the left temporal lobe of the brain, which is usually associated with spoken language, was engaged during the processing of Silbo. The researchers found that other key regions in the brain’s frontal lobe also responded to the whistles, including those activated in response to sign language among deaf people. When the experiments were repeated with non-whistlers, however, activation was observed in all areas of the brain.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>‘Our results provide more evidence about the flexibility of human capacity for language in a variety of forms,’ Corina says. ‘These data suggest that left-hemisphere language regions are uniquely adapted for communicative purposes, independent of the modality of signal. The non-Silbo speakers were not recognising Silbo as a language. They had nothing to grab onto, so multiple areas of their brains were activated.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> Carreiras says the origins of Silbo Gomero remain obscure, but that indigenous Canary Islanders, who were of North African origin, already had a whistled language when Spain conquered the volcanic islands in the 15th century. Whistled languages survive today in Papua New Guinea, Mexico, Vietnam, Guyana, China, Nepal, Senegal, and a few mountainous pockets in southern Europe. There are thought to be as many as 70 whistled languages still in use, though only 12 have been described and studied scientifically. This form of communication is an adaptation found among cultures where people are often isolated from each other, according to Julien Meyer, a researcher at the Institute of Human Sciences in Lyon, France. ‘They are mostly used in mountains or dense forests,’ he says. ‘Whistled languages are quite clearly defined and represent an original adaptation of the spoken language for the needs of isolated human groups.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span> But with modern communication technology now widely available, researchers say whistled languages like Silbo are threatened with extinction. With dwindling numbers of Gomera islanders still fluent in the language, Canaries’ authorities are taking steps to try to ensure its survival. Since 1999, Silbo Gomero has been taught in all of the island’s elementary schools. In addition, locals are seeking assistance from the United Nations Educational, Scientific and Cultural Organization (UNESCO). ‘The local authorities are trying to get an award from the organisation to declare [Silbo Gomero] as something that should be preserved for humanity,’ Carreiras adds.
          </p>
        </div>
      </div> <br />

      <div className='text-inherit mt-5'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>READING PASSAGE 3</div> <br />
          <h5>You should spend about 20 minutes on <span className='text-xl font-bold'>Questions 27-40</span> which are based on Reading Passage 3 below.</h5> <br />
          <h4 className='text-center'>Environmental practices of big businesses</h4> <br />
        </div>
      </div>
      <div className='main-Passages'>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            The environmental practices of big businesses are shaped by a fundamental fact that for many of us offend our sense of justice. Depending on the circumstances, a business may maximize the amount of money it makes, at least in the short term, by damaging the environment and hurting people. That is still the case today for fishermen in an unmanaged fishery without quotas, and for international logging companies with short-term leases on tropical rainforest land in places with corrupt officials and unsophisticated landowners. When government regulation is effective, and when the public is environmentally aware, environmentally clean big businesses may out-compete dirty ones, but the reverse is likely to be true if government regulation is ineffective and if the public doesn’t care.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>It is easy for the rest of us to blame a business for helping itself by hurting other people. But blaming alone is unlikely to produce change. It ignores the fact that businesses are not charities but profit-making companies, and that publicly owned companies with shareholders are under obligation to those shareholders to maximize profits, provided that they do so by legal means. US laws make a company’s directors legally liable for something termed ‘breach of fiduciary responsibility’ if they knowingly manage a company in a way that reduces profits. The car manufacturer Henry Ford was in fact successfully sued by shareholders in 1919 for raising the minimum wage of his workers to $5 per day: the courts declared that, while Ford’s humanitarian sentiments about his employees were nice, his business existed to make profits for its stockholders.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>Our blaming of businesses also ignores the ultimate responsibility of the public for creating the condition that let a business profit through destructive environmental policies. In the long run, it is the public, either directly or through its politicians, that has the power to make such destructive policies unprofitable and illegal, and to make sustainable environmental policies profitable.

            The public can do that by suing businesses for harming them, as happened after the Exxon Valdez disaster, in which over 40,000m3 of oil were spilled off the coast of Alaska. The public may also make their opinion felt by preferring to buy sustainably harvested products; by making employees of companies with poor track records feel ashamed of their company and complain to their own management; by preferring their governments to award valuable contracts to businesses with a good environmental track record; and by pressing their governments to pass and enforce laws and regulations requiring good environmental practices.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>In turn, big businesses can expert powerful pressure on any suppliers that might ignore public or government pressure. For instance, after the US public became concerned about the spread of a disease known as BSE, which was transmitted to humans through infected meat, the US government’s Food and Drug Administration introduced rules demanding that the meat industry abandon practices associated with the risk of the disease spreading. But for five years the meat packers refused to follow these, claiming that they would be too expensive to obey. However, when a major fast-food company then made the same demands after customer purchases of its hamburgers plummeted, the meat industry complied within weeks. The public’s task is therefore to identify which links in the supply chain are sensitive to public pressure: for instance, fast-food chains or jewelry stores, but not meat packers or gold miners.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Some readers may be disappointed or outraged that I place the ultimate responsibility for business practices harming the public on the public itself. I also believe that the public must accept the necessity for higher prices for products to cover the added costs, if any, of sound environmental practices. My views may seem to ignore the belief that businesses should act in accordance with moral principles even if this leads to a reduction in their profits. But I think we have to recognize that, throughout human history, in all politically complex human societies, government regulation has arisen precisely because it was found that not only did moral principles need to be made explicit, they also needed to be enforced.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span>To me, the conclusion that the public has the ultimate responsibility for the behavior of even the biggest businesses is empowering and hopeful, rather than disappointing. My conclusion is not a moralistic one about who is right or wrong, admirable or selfish, a good guy or a bad guy. In the past, businesses have changed when the public came to expect and require different behavior, to reward businesses for behavior that the public wanted, and to make things difficult for businesses practicing behaviors that the public didn’t want. I predict that in the future, just as in the past, changes in public attitudes will be essential for changes in businesses’ environmental practices.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Panel1Q_2