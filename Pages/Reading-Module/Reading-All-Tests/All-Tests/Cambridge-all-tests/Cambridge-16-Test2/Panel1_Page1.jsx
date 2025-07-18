import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["TRUE"], ["NOT GIVEN"], ["TRUE"], ["FALSE"], ["FALSE"], ["TRUE"],
    ["TRUE"],
    ["NOT GIVEN"],
    ["Ridgeway"],
    ["documents"],
    ["soil"],
    ["fertility"],
    ["Rhiannon"],
    ["D"], ["C"], ["A"], ["G"],
    ["B"],
    ["H"],
    ["E"],
    ["YES"],
    ["NO"], ["NOT GIVEN"], ["YES"], ["NOT GIVEN"],
    ["NO"],
    ["B"], ["C"], ["B"],
    ["D"], ["D"], ["A"], ["C"], ["F"], ["G"],
    ["FALSE"],
    ["NOT GIVEN"],
    ["NOT GIVEN"],
    ["TRUE"],
    ["TRUE"]

  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
      onMouseDown={() => { makeEditableAndHighlight("green"); }}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> <br />
          <h5 className='mt-1 text-xl'>The White Horse of Uffington</h5>
        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>The cutting of huge figures or ‘geoglyphs’ into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country’s southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.
          The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age* date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. That fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia..</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep close to the Late Bronze Age* (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic** track.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away. The earliest evidence of a horse at Uffington is from the 1070s CE when ‘White Horse Hill’ is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse’s body, and from another cut near the base. The result was a date for the horse’s construction somewhere between 1400 and 600 BCE – in other words, it had a Late Bronze Age or Early Iron Age origin.
          The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem making the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic*** horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse. <br /> <br /> <br />
          The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carving are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.

          <br /> <br />

          ———-

          *Iron Age: a period (in Britain 800 BCE – 43 CE) that is characterised by the use of iron tools
          <br /> <br />
          *Bronze Age: a period (in Britain c. 2,500 BCE – 800 BCE) that is characterised by the development of bronze tools
          <br /> <br />

          **Neolithic: a period (in Britain c. 4,000 BCE – c. 2,500 BCE) that is significant for the spread of agricultural practices, and the use of stone tools
          <br /> <br />
          ***Celtic: an ancient people who migrated from Europe to Britain before the Romans
        </p>
      </div>
    </section>
  )
}

export default Panel1