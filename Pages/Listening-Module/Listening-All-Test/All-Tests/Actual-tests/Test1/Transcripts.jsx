

import React from "react";
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from "react-native"

const Actural_Transcripts1 = () => {
    return (

        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        Audioscripts Listening Actual Practice Test 01
                    </Text>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SECTION 1</Text>
                        <Text style={styles.paragraph}>
                            You will hear two teachers, Andrew and Katie, discussing the coming excursion of their language class.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> Well, we have this school excursion planned, but when exactly is it? Is it this Tuesday or Wednesday?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> Well it can’t be Tuesday, with the English tests taking place.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> Ah, right. Not Tuesday, but <Text style={styles.highlight}>Wednesday (Example)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> That’s right – all day Wednesday – taking a bus outside the city.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> And where are we going?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> Ah, last month we went to Arthur Island, so this time we’re going to the… <Text style={styles.highlight}>Animal Park (Q1)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> Yes, Tuesday we’ll have some showers, but by Wednesday, the day of our excursion, it will be… well, their words are <Text style={styles.highlight}>‘cold and cloudy’ (Q2)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> Let’s see. The bus picks us up at 8.30 am, and then it’s an hour and a half on the road, so we arrive at 10 am… sorry, with the 15 minutes break, that will actually be <Text style={styles.highlight}>10.15 am (Q3)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> Well, one fun event planned that day is <Text style={styles.highlight}>‘Birds of Prey’ (Q4)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> I had a choice between the ‘Reptile Display’ and the ‘Koala Handling’. Given the forecast, I thought it better to choose the <Text style={styles.highlight}>reptile display (Q5)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Katie:</Text> We leave the park at 4.30, but then we face traffic, so we won’t get back until well after 6pm. It will most likely be <Text style={styles.highlight}>6.30 (Q6)</Text>. But that’s better than the last trip: we didn’t get home until 8.30 that time.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> You imagine right. But it’s the <Text style={styles.highlight}>Chinese (Q7)</Text> who constitute the majority, but only just.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> I had thought Koreans might be second, but it’s actually the <Text style={styles.highlight}>Japanese (Q8)</Text>, quite close behind.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> Indonesians at 15%, and… ah… the <Text style={styles.highlight}>Koreans (Q9)</Text> are a little higher.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Andrew:</Text> Ah, <Text style={styles.highlight}>Thai (Q10)</Text> students number just a fraction more. As for the other nationalities, collectively they’re only 3%, so it wasn’t worth giving each of them a separate category. I just grouped them under ‘other’ – that’s Vietnamese, South American, a couple of Russians, and so on.
                        </Text>
                    </View>
                </View>

                <View style={styles.innerContainer}>
                    {/* Section Header */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SECTION 2</Text>
                        <Text style={styles.paragraph}>
                            You will hear a representative from EasyTravel Travel Agency explaining to some customers the benefits of her company.
                        </Text>
                    </View>

                    {/* Dialogue Section */}
                    <View style={styles.section}>
                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> Hello everyone. Now, you’re here because you’re interested in travel, right? And you’re in the right place, for at EasyTravel, we have the best deals for the best locations. We specialise in eco-travel, <Text style={styles.strong}>or holidays designed to get you amongst nature</Text> <Text style={styles.highlight}>(Q11)</Text>, ignoring the hustle and bustle of big cities.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> If you look at our office here, you’ll see our overseas consultants. That’s for trips overseas, obviously, to Europe, to North America, but primarily <Text style={styles.strong}>for the Asian market, which is generally more popular in this part of the world</Text> <Text style={styles.highlight}>(Q12)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> But they deal with the accounts in the morning, <Text style={styles.strong}>so you’ll need to talk to them in the afternoon</Text> <Text style={styles.highlight}>(Q13)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> Mostly, by being closer, some of them can be done in a day tour. Yes, <Text style={styles.strong}>it’s fast and convenient, with none of those long-haul bus trips which often leave you cramped and uncomfortable, and stuffing heavy suitcases into luggage racks</Text> <Text style={styles.highlight}>(Q14)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> We use the services of the famous Sleek Line Company, whose buses are known as the very best. Yes, they are big, yes, they are comfortable, but what makes them especially different is the personal attendant, who accompanies the driver, <Text style={styles.strong}>ready and willing to serve you</Text> <Text style={styles.highlight}>(Q15)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> Now, let me tell you their specific functions. Firstly, <Text style={styles.strong}>the consultant on the left, next to the plant, is the</Text> <Text style={styles.highlight}>‘Local Tours’ consultant (Q16)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> <Text style={styles.strong}>Next to her is the ‘Interstate Tours’, and that can involve either buses or planes</Text> <Text style={styles.highlight}>(Q17)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> Now, as I said, <Text style={styles.strong}>we can do international tours, and for that you need our big office, just through that door – the one between those two plants</Text> <Text style={styles.highlight}>(Q18)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> However, if your international tour is in the Asian region, which is generally our most popular option, then we deal with that in a separate room the one opposite International Tours, but not the corner one. <Text style={styles.strong}>Just go through that door on the left – the one next to that cupboard</Text> <Text style={styles.highlight}>(Q19)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Representative:</Text> <Text style={styles.strong}>The door next to that is, in fact, our General Office, so please don’t go through there. That’s reserved for staff members only</Text> <Text style={styles.highlight}>(Q20)</Text>.
                        </Text>
                    </View>
                </View>

                <View style={styles.innerContainer}>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SECTION 3</Text>
                        <Text style={styles.paragraph}>
                            You will hear two students, Sam: and Liz, discussing their university orientation program.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Hi Liz. How do you feel about starting university here?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> A little bit nervous, but I’m confident I can handle it. This orientation program seems like it will help us a lot.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Sure. I’m looking at the timetable here myself. It seems that there are choices available.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> I can see. So, what are you going to do Monday afternoon? In the morning we all have the opening lecture, but it looks like we have a choice later that day, as you said.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Well, the <Text style={styles.highlight}>‘Careers Lecture’</Text> might be helpful, but I am interested in the <Text style={styles.highlight}>‘Uni Tour’</Text>. It’s probably too early to be thinking of careers now, anyway, and I want to know what’s <Text style={styles.bold}>what at this new university, so. I’m doing the tour</Text> <Text style={styles.highlightGreen}>(Q21)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> Alright. I’ll come along with you... we will be spending four years here.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Tuesday is another full day, too...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> <Text style={styles.highlight}>‘Library Tour’</Text> or <Text style={styles.highlight}>‘Student Union Induction’</Text>. What do you think?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> I think the student union is very important... so we should take advantage of the library tour.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> Library it is, then <Text style={styles.highlightGreen}>(Q22)</Text>. Now, Wednesday...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> ...I’m going to the computer lab <Text style={styles.highlightGreen}>(Q23)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> Don’t you think knowing our legal rights is equally important?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Sure, but it’s something we can pick up later.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Let me see the timetable... either a <Text style={styles.highlight}>BBQ</Text> on the main lawn, or the <Text style={styles.highlight}>dance</Text> <Text style={styles.highlightGreen}>(Q24)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> I never pass up the chance to eat something...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> If I can get a free meal, I’ll take it any day...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Guess what Liz? There’s another interesting thing in this orientation booklet... a <Text style={styles.highlight}>‘style guide’</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> What’s that?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Take a look yourself... They want a uniform style of presentation.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> ...everything we hand in must have a header and a footer.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> A header and a footer... header <Text style={styles.highlightGreen}>(Q25)</Text> is at the very top...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> ...heading must be <Text style={styles.bold}>16</Text> <Text style={styles.highlightGreen}>(Q26)</Text> points, bold and underlined.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> ...subheadings are 14 points... font has to be Arial.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> ...main text is Arial... size is <Text style={styles.bold}>16</Text> <Text style={styles.highlightGreen}>(Q27)</Text> points... spacing is one and a half. Header and footer are <Text style={styles.bold}>single-spaced</Text> <Text style={styles.highlightGreen}>(Q28)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Probably to allow the teacher to insert comments...
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> ...wide margins on all sides... assumes we will be making mistakes.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> ...header has the name of the <Text style={styles.bold}>work</Text> <Text style={styles.highlightGreen}>(Q29)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> Not the name of the teacher?
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> No... the <Text style={styles.bold}>teacher’s</Text> <Text style={styles.highlightGreen}>(Q30)</Text> name goes in the footer.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Liz:</Text> Okay... all logical.
                        </Text>

                        <Text style={styles.paragraph}>
                            <Text style={styles.bold}>Sam:</Text> Right – as you say, all very logical.
                        </Text>
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SECTION 4</Text>
                        <Text style={styles.paragraph}>
                            You will hear a lecturer discussing public parks.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.paragraph}>
                            Most of us are familiar with a local park. We spend time there, play there, and have some of our best memories in these places. But what is a park? Basically, it can be defined as a natural, or at least semi-natural, piece of land, planted with a variety of trees, bushes, and flowers, protected and reserved for the enjoyment of all citizens. There are usually <Text style={styles.bold}>regulations </Text>
                            <Text style={styles.highlight}>(Q31)</Text> about the sorts of behaviour that can take place within.
                        </Text>

                        <Text style={styles.paragraph}>
                            And sometimes there are facilities such as children’s playgrounds, or fields for ball games and other sorts of activities. For this reason, if there is <Text style={styles.bold}>grass, it is kept short </Text>
                            <Text style={styles.highlight}>(Q32)</Text>, and this also discourages the breeding of insect pests.
                        </Text>

                        <Text style={styles.paragraph}>
                            A well-maintained park actually needs a lot of people to look after it, and more so if the park showcases special plants, flowers, or trees, in which case it is called a ‘botanic garden’. In complete contrast, if the park is big and remote enough, it is sometimes designated as a wilderness park, to be left completely alone and untouched, protected from all <Text style={styles.bold}>development </Text>
                            <Text style={styles.highlight}>(Q33)</Text> in order to allow wild species, both plant and animal, to live undisturbed.
                        </Text>

                        <Text style={styles.paragraph}>
                            But it is the urban park – the sort of park that most people are familiar with, that I want to talk about now. These preserve natural landscapes for the pleasure of the urban population, most commonly just for <Text style={styles.bold}>passive recreation </Text>
                            <Text style={styles.highlight}>(Q34)</Text> – in other words, allowing people just to observe the trees, and lie in the grass, and such passive recreation is certainly needed.
                        </Text>

                        <Text style={styles.paragraph}>
                            Continuing on the subject of parks, it might surprise you to know that once there were none. A thousand years ago, there was no need, since there were already extensive open spaces, forests, and wilderness surrounding most cities and towns – for example, in Europe. These dark dank forests were large and even dangerous, full of wild animals and with the potentially fatal result of <Text style={styles.bold}>getting lost </Text>
                            <Text style={styles.highlight}>(Q35)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            However, with the rapidly increasing human population, the original wilderness and natural open spaces were intruded upon. Forests were cut down as populations spread, and with them, urban pollution and further deforestation. But it was only with the advent of the <Text style={styles.bold}>Industrial Revolution </Text>
                            <Text style={styles.highlight}>(Q36)</Text> that people realised natural areas needed to be preserved, to give the populace access to the sort of nature that was fast disappearing due to the uncontrolled development and demand for resources.
                        </Text>

                        <Text style={styles.paragraph}>
                            The first park, expressly designed for that purpose, is usually considered to be Princes Park in Liverpool. This was in 1841, on land donated to the public by a rich iron merchant. With such a generous donation (worth about <Text style={styles.bold}>£50,000 </Text>
                            <Text style={styles.highlight}>(Q37)</Text>), the council decided to invest £5,000 of its own money in making it look good. Consequently, they hired a landscape designer, Joseph Paxton, who designed twisting turning pathways among shade-giving trees, all based around a central lake <Text style={styles.highlight}>(Q38)</Text>.
                        </Text>

                        <Text style={styles.paragraph}>
                            But, if we were to pick the park that most people are familiar with, it would be the much smaller neighbourhood park. These can be tiny, but, by being in the midst of extensive development and dense populations, they are increasingly seen as a <Text style={styles.bold}>refuge </Text>
                            <Text style={styles.highlight}>(Q39)</Text>, where one can get a glimpse of true nature.
                        </Text>

                        <Text style={styles.paragraph}>
                            Many psychologists now maintain that this glimpse is necessary, for ultimately, as a species, we have an innate affinity for nature, and the concrete urban zoo clashes with our inner being. This has seen the rejuvenation of many urban parks that were once left to decay, for example, in New York or London, and indeed, some cities, such as <Text style={styles.bold}>Melbourne </Text>
                            <Text style={styles.highlight}>(Q40)</Text>, are known all over the world for their abundance of carefully maintained parks, including a world famous botanic garden.
                        </Text>
                    </View>
                </View>


            </ScrollView>

        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    innerContainer: {
        maxWidth: 800,
        alignSelf: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e40af',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
    },
    section: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dc2626',
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 14,
        color: '#374151',
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    highlight: {
        color: '#2563eb',
        fontWeight: 'bold',
    },

});


export default Actural_Transcripts1;
