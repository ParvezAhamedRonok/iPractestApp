import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    // Passage 1
    ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"],
    ["resignation"], ["materials"], ["miners"], ["family"], ["collectors"], ["income"],

    // Passage 2
    ["iii"], ["vi"], ["v"], ["x"], ["iv"], ["viii"], ["i"],
    ["wheels"], ["film"], ["filter"], ["waste"], ["performance"], ["servicing"],

    // Passage 3
    ["C"], ["B"], ["F"], ["A"], ["E"], ["D"], ["F"], ["B"], ["C"], ["G"],
    ["B"], ["D"], ["A"], ["A"]
  ];

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)





  return (
    <section className='mainSection p-4 mb-[50px]' onMouseDown={() => {
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
    }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-4 text-justify">
          <div className=''>SECTION 1 <br />
            READING PASSAGE 1</div><br />
          <div>Questions 1-13</div>
        </div>
      </div> <br />


      <div className='main-Passages'>
        <h4 className='mt-1 text-center'>Henry Moore (1898-1986)</h4>
        <i className='mt-1 text-center'>The British sculptor Henry Moore was a leading figure in the 20th-century art world</i> <br />
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            Henry Moore was born in Castleford, a small town near Leeds in the north of England. He was the seventh child of Raymond Moore and his wife Mary Baker. He studied at Castleford Grammar School from 1909 to 1915, where his early interest in art was encouraged by his teacher Alice Gostick. After leaving school, Moore hoped to become a sculptor, but instead he complied with his father’s wish that he train as a schoolteacher. He had to abandon his training in 1917 when he was sent to France to fight in the First World War.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>After the war, Moore enrolled at the Leeds School of Art, where he studied for two years. In his first year, he spent most of his time drawing. Although he wanted to study sculpture, no teacher was appointed until his second year. At the end of that year, he passed the sculpture examination and was awarded a scholarship to the Royal College of Art in London. In September 1921, he moved to London and began three years of advanced study in sculpture.

            Alongside the instruction he received at the Royal College, Moore visited many of the London museums, particularly the British Museum, which had a wide-ranging collection of ancient sculpture. During these visits, he discovered the power and beauty of ancient Egyptian and African sculpture. As he became increasingly interested in these ‘primitive’ forms of art, he turned away from European sculptural traditions.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>After graduating, Moore spent the first six months of 1925 travelling in France. When he visited the Trocadero Museum in Paris, he was impressed by a cast of a Mayan* sculpture of the rain spirit. It was a male reclining figure with its knees drawn up together, and its head at a right angle to its body. Moore became fascinated with this stone sculpture, which he thought had a power and originality that no other stone sculpture possessed. He himself started carving a variety of subjects in stone, including depiction of reclining women, mother-and-child groups, and masks.

            Moore’s exceptional talent soon gained recognition, and in 1926 he started work as a sculpture instructor at the Royal College. In 1933, he became a member of a group of young artists called Unit One. The aim of the group was to convince the English public of the merits of the emerging international movement in modern art and architecture.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>Around this time, Moore moved away from the human figure to experiment with abstract shapes. In 1931, he held an exhibition at the Leicester Galleries in London. His work was enthusiastically welcomed by fellow sculptors, but the reviews in the press were extremely negative and turned Moore into a notorious figure. There were calls for his resignation from the Royal College, and the following year, when his contract expired, he left to start a sculpture department at the Chelsea School of Art in London.

            Throughout the 1930s, Moore did not show any inclination to please the British public. He became interested in the paintings of the Spanish artist Pablo Picasso, whose work inspired him to distort the human body in a radical way. At times, he seemed to abandon the human figure altogether. The pages of his sketchbooks from this period show his ideas for abstract sculptures that bore little resemblance to the human form.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>In 1940, during the Second World War, Moore stopped teaching at the Chelsea School and moved to a farmhouse about 20 miles north of London. A shortage of materials forced him to focus on drawing. He did numerous small sketches of Londoners, later turning these ideas into large coloured drawings in his studio. In 1942, he returned to Castleford to make a series of sketches of the miners who worked there.

            In 1944, Harlow, a town near London, offered Moore a commission for a sculpture depicting a family. The resulting work signifies a dramatic change in Moore’s style, away from the experimentation of the 1930s towards a more natural and humanistic subject matter. He did dozens of studies in clay for the sculpture, and these were cast in bronze and issued in editions of seven to nine copies each. In this way, Moore’s work became available to collectors all over the world. The boost to his income enabled him to take on ambitious projects and start working on the scale he felt his sculpture demanded.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> Critics who had begun to think that Moore had become less revolutionary were proven wrong by the appearance, in 1950, of the first of Moore’s series of standing figures in bronze, with their harsh and angular pierced forms and distinct impression of menace. Moore also varied his subject matter in the 1950s with such works as Warrior with Shield and Falling Warrior. These were rare examples of Moore’s use of the male figure and owe something to his visit to Greece in 1951, when he had the opportunity to study ancient works of art.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>In his final years, Moore created the Henry Moore Foundation to promote art appreciation and to display his work. Moore was the first modern English sculptor to achieve international critical acclaim and he is still regarded as one of the most important sculptors of the 20th century.
            —
            *Mayan: belonging to an ancient civilisation that inhabited parts of current-day Mexico, Guatemala, Belize, El Salvador and Honduras.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1