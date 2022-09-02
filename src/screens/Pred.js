import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'

const Pred = ({ navigation }) => {

  const email = navigation.getParam('email')

  const [selected, setSelected] = useState('')
  const [selecte, setSelecte] = useState('')
  const [col, setCol] = useState('')
  const [per, setPer] = useState('')
  const [res, setRes] = useState('')
  const [scol, setScol] = useState([])

  const data = [
    { key: 'OC', value: 'OC' },
    { key: 'BC', value: 'BC' },
    { key: 'MBC', value: 'MBC' },
    { key: 'MBCDNC', value: 'MBCDNC' },
    { key: 'BCM', value: 'BCM' },
    { key: 'SC', value: 'SC' },
    { key: 'SCA', value: 'SA' },
    { key: 'ST', value: 'ST' },
  ]

  const collegelist = [{key: '5',
  value: 'Annamalai University Faculty of Engineering and\nTechnology,Annamalai nagar,Cuddalore 608002'},
 {key: '304',
  value: 'The American college(Co-Ed), Alagar Koil Road,Tallakulam, Madurai -\n625 002'},
 {key: '309',
  value: 'Arulanandar College, (Co-Ed)Karumathur Village & Post Usilampatti\nTaluk,  Madurai-625 514'},
 {key: '313',
  value: 'Ayya Nadar Janaki Ammal college(Co-Ed) (Autonomous) Sivakasi\nwest Srivilliputhur Road, , Virudhunagar District - 626 124'},
 {key: '314',
  value: 'Bishop Heber College, (Co-Ed) 8, Allithurai Road, Puthur ,\nTiruchirappalli District-620 017'},
 {key: '319',
  value: 'Coimbatore Institute of Management and Technology, Vellimalai\nPattinam Narasipuram (P)(Co-Ed), Thondamuthur via Coimbatore- 641 109'},
 {key: '322',
  value: 'D.D Goverdhan Doss Vaishnav College (Co-Ed), Gokul Bagh, 833,\nPeriyar E.V.R. High Road, Arumbakkam, Chennai-600106'},
 {key: '325',
  value: 'Dr. G.R. Damodaran College of Science(Co-Ed), Avanashi Road,\nKalapatti ,Civil Aerodrome (P),   Coimbatore-641 014'},
 {key: '328',
  value: 'The Ethiraj College(Women), 70, Ethiraj Salai,   Chennai-600 008'},
 {key: '329',
  value: 'Fathima College (Autonomous) (women) Mary Land, Madurai North\nTaluk  Madurai-625 018'},
 {key: '331',
  value: 'Government Arts College,   Race Course Post,  Coimbatore District.\n641 018'},
 {key: '332',
  value: "Govt. Thirumagal Mill's College (Co-Ed),  Gandhi Nagar,   Gudiyattam\nTaluk, Vellore-632 602"},
 {key: '333',
  value: 'Government Arts College for Men (Autonomous) (Co-Ed) , Karuppur\nRoad,  Kumbakonam Taluk Thanjavur District 612 001'},
 {key: '335',
  value: 'Govt. Arts College (Men),(Co-Ed) , Chetty Road, Hasthampatti Post,\nSalem Taluk & District-636 007'},
 {key: '336',
  value: 'Gobi Arts and Science College (Co-Ed), (Autonomous) ,\nGobichettipayalam Taluk Erode District -638 453'},
 {key: '339',
  value: 'Gurunanak College (A) , Velachery, Velachery Main Road, Velachery,\nChennai-600 042'},
 {key: '341',
  value: "Hindustan College of Arts and Science(Co-Ed), Hindustan Gardens,\n'Behid Nava India'  Sowripalayam, Coimbatore- 641 028"},
 {key: '344',
  value: 'Jamal Mohamed College, Post Box No.808, 7 Race Course Road,\nKhajanagar,Tiruchirappalli-620 020'},
 {key: '348',
  value: 'JKK Nataraja college of Arts and Science, Komarapalayam Post,\nNamakkal District 638 183'},
 {key: '349',
  value: 'JBAS   college for women (AN),(Evening) 56, K.B. Dasan Road,\nTeynampet, Chennai-600 018'},
 {key: '350',
  value: 'Kamaraj college(Co-Ed) 482, Tiruchendur Road ,  Thoothukudi\nDistrict. 628 003'},
 {key: '359',
  value: 'Madras Christian College(Co-Ed), Tambaram East Post,\nKancheepuram District, Chennai-600 059'},
 {key: '364',
  value: 'Meenakshi College for Women(A), 363 Arcot Salai, Kodambakkam,\nChennai-600 024 (Day)'},
 {key: '366',
  value: 'MEASI Instt of Information Tech., 87, Peters Road,\nRoyapettah,Chennai-600 014  (New College)'},
 {key: '368',
  value: 'Mohamed Sathak College of Arts and Science(Co-Ed), 13,\nMedawakkam Road,  Sholinganallur, Chennai. Kancheepuram District 600 119'},
 {key: '373',
  value: 'Nadar Saraswathy College  Arts and Science ,  Post Box No.55\nVadapudupatti, Theni , Annanji (post), Periyakulam Taluk, Theni District-625 531'},
 {key: '377',
  value: 'Nehru College of Management (Co-Ed) , Nehru Gardens,\nThirumalayampalayam, Coimbatore - 641 105'},
 {key: '378',
  value: 'Nehru Memorial College(Co-Ed), College Road, Puthanampatti ,\nMusri Taluk, Thiruchirapalli District 621 007 (2 sections )   (Day)'},
 {key: '389',
  value: 'Presidency college,(Co-Ed),100, Kamarajar Salai, Triplicane Post,\nChennai District-600 005'},
 {key: '391',
  value: 'PSG College of Arts & Science, (Co-Ed) Avinashi Road, Civil Aerodrome ,Coimbatore-641 014'},
 {key: '392',
  value: 'Quiad E Millath Govt. College for Women,   74, Anna Salai,  Binny\nRoad,  Chennai 600 002'},
 {key: '395',
  value: 'RVS College of Arts & Science(Co-Ed) 242/B, Trichy Road, Sulur,\nCoimbatore-641 402'},
 {key: '397',
  value: 'Sacred Heart College (Co-Ed) (Autonomous) Tirupattur, Vellore-635\n601'},
 {key: '402',
  value: "Sengamala Thayar Educational Trust Women's College, 1 Main Road Sundarakkottai Village & Post, Mannargudi, Tiruvarur-614 016"},
 {key: '414',
  value: 'Sri Meenakshi Government Arts college for women (A), Goripalayam Village, Kalpalam Road, Madurai North Taluk,  Madurai-625 002'},
 {key: '425',
  value: 'S R M Arts and Science College(Co-Ed), SRM Nagar, Potheri Village, Kattankulathur Post, Chengalpet Taluk, Kancheepuram Dt. 603 203'},
 {key: '439',
  value: 'Vellalar College for Women, Thindal  Post, Perundurai Road, Erode-\n638 012'},
 {key: '440',
  value: 'V.V.Vanniaperumal College for Women,  Madurai Road Nh-7  ,\nVirudhunagar-626 001'},
 {key: '472',
  value: "St. Xavier's college [Autonomous] (Co-Ed)21, North High Ground\nRoad,Palayamkottai  , Tirunelveli-627 002"},
 {key: '507',
  value: 'Nehru Institute of Information Technology and Management (STAND ALONE), Thirumalayampalayam, Coimbatore District 641105'},
 {key: '710', value: 'University of Madras, Chepauk, Chennai 600005'},
 {key: '714',
  value: 'S S M College of Engineering (STAND ALONE), Komarapalayam,\nNamakkal District 638183'},
 {key: '1106',
  value: 'Jaya Engineering College, Thirunindravur, Chennai 602024'},
 {key: '1114',
  value: 'S A Engineering College (AUTONOMOUS), Thiruverkadu, Chennai\n600077'},
 {key: '1116',
  value: 'Sri Venkateswara College of Engineering and Technology,\nThirupachur, Thiruvallur District 631203'},
 {key: '1218',
  value: 'Sri Muthukumaran Institute of Technology, Near Mangadu, Chennai\n600069'},
 {key: '1401',
  value: 'Adhiparasakthi Engineering College, Melmaruvathur, Kancheepuram\nDistrict 603319'},
 {key: '1409',
  value: 'Karpagavinayaga College of Engineering and Technology, Palayanoor Post, Maduranthagam Taluk, Kancheepuram District 603308'},
 {key: '1412',
  value: 'Mailam Engineering College, Mailam, Villupuram District 604304'},
 {key: '1505',
  value: 'C Abdul Hakeem College of Engineering and Technology,\nMelvisharam, Ranipet District 632509'},
 {key: '1507',
  value: 'Ganadipathy Tulsi’s Jain Engineering College, Kaniyambadi, Vellore\nDistrict 632102'},
 {key: '1509',
  value: 'Meenakshi College of Engineering, Vembuliamman Koil Street, K K\nNagar (West), Chennai 600078'},
 {key: '1510',
  value: 'Priyadarshini Engineering College, Vaniyambadi Post, Thirupathur\nDistrict 635751'},
 {key: '1516',
  value: 'Thanthai Periyar Government Institute of Technology, Bagayam,\nVellore District 632002'},
 {key: '1517',
  value: 'Thirumalai Engineering College, Kilambi, Kancheepuram District\n631551'},
 {key: '2007',
  value: 'Coimbatore Institute of Technology (AUTONOMOUS), Civil\nAerodrome Post, Coimbatore District 641014'},
 {key: '2601',
  value: 'Adhiyamaan  College of Engineering (AUTONOMOUS),  Hosur,\nKrishnagiri District 635130'},
 {key: '2608',
  value: 'M Kumarasamy College of Engineering (AUTONOMOUS),\nThalavapalayam, Karur District 639113'},
 {key: '2609',
  value: 'Mahendra Engineering College (AUTONOMOUS), Mahendhirapuri,\nMallasamudram, Namakkal District 637503'},
 {key: '2610',
  value: 'Muthayammal Engineering College (AUTONOMOUS), Rasipuram,\nNamakkal District 637408'},
 {key: '2611',
  value: 'Paavai Engineering College(AUTONOMOUS), NH-7, Pachal Post,\nNamakkal District 637018'},
 {key: '2618',
  value: 'Sona College of Technology (AUTONOMOUS), Suramangalam Post,\nSalem District 636005'},
 {key: '2707',
  value: 'Erode Sengunthar Engineering College (AUTONOMOUS), Thudupathi\nPost, Erode District 638057'},
 {key: '2708',
  value: 'Hindusthan College of Engineering and Technology (AUTONOMOUS), Othakkalmandapam Post, Coimbatore District 641032'},
 {key: '2710',
  value: 'Karpagam College of Engineering (AUTONOMOUS),\nOthakkalmandapam, Coimbatore District 641032'},
 {key: '2711',
  value: 'Kongu Engineering College (AUTONOMOUS), Perundurai, Erode\nDistrict 638052'},
 {key: '2712',
  value: 'Kumaraguru College of Technology (AUTONOMOUS),\nChinnavedampatti Post, Coimbatore District 641006'},
 {key: '2715',
  value: 'Nandha Engineering College (AUTONOMOUS), Pitchandampalayam\nPost, Erode District 638052'},
 {key: '2726',
  value: 'S N S College of Technology (AUTONOMOUS), Kalappatti Post,\nCoimbatore District 641035'},
 {key: '2750',
  value: 'KIT-Kalaignar Karunanidhi Institute of Technology (AUTONOMOUS) ,\nKannampalayam, Coimbatore District 641402'},
 {key: '3011',
  value: 'University College of Engineering, BIT Campus, Anna University,\nTiruchirappalli 620024'},
 {key: '3410',
  value: 'Krishnaswamy Collge of Engineering and Technology, S\nKumarapuram, Cuddalore District 607109'},
 {key: '3801',
  value: 'A V C College of Engineering, Mannampandal Post, Mayiladuthurai,\nNagappattinam District 609305'},
 {key: '3803',
  value: 'Anjalai Ammal-Mahalingam Engineering College, Kovilvenni,\nThiruvarur District 614403'},
 {key: '3817',
  value: 'Roever Engineering College, Elambalur, Perambalur District 621220'},
 {key: '4020',
  value: 'Anna University Regional Centre Tirunelveli, NGO Colony,\nPalayamkottai, Tirunelveli District 627005'},
 {key: '4960',
  value: 'Mepco Schlenk Engineering College (AUTONOMOUS), Sivakasi,\nVirudhunagar District 626005'},
 {key: '4971',
  value: "St. Xavier's Catholic College of Engineering, Chunkankadai, Nagercoil,\nKanyakumari District 629803"},
 {key: '5008',
  value: 'Thiagarajar College of Engineering (AUTONOMOUS),\nTirupparankundram, Madurai District 625015'},
 {key: '5904',
  value: 'K L N College of Engineering(AUTONOMOUS), Pottapalayam,\nSivagangai District 630611'},
 {key: '5910',
  value: 'P S N A Colllege of Engineering and Technology, Dindigul District\n624622'},
 {key: '1D',
  value: 'University Departments of Anna University, Chennai - CEG Campus,\nSardar Patel Road, Guindy, Chennai 600 025'},
 {key: '1ESS',
  value: 'University Departments of Anna University, Chennai - CEG Campus,\nSardar Patel Road, Guindy, Chennai 600 025(Evening Shift)'},
 {key: '2006A',
  value: 'PSG College of Technology (AUTONOMOUS), Peelamedu,\nCoimbatore District 641004'},
 {key: '2006S',
  value: 'PSG College of Technology (AUTONOMOUS), Peelamedu,\nCoimbatore District 641004(SS)'},
 {key: '426D',
  value: "St. Joseph's College, Chatiram Bus Stand, Teppakulam, Thiruchirappalli District-620 002"},
 {key: '713C',
  value: 'Bharathiar University, Maruthamalai Main Road, Somayampalayam\nVillage, Coimbatore 641046'},
 {key: '713E',
  value: 'Bharathiar University Post Graduate Extension Centre, Erode - 638\n001.'},
 {key: '4952',
  value: 'C S I Institute of Technology, Thovalai, Kanyakumari District 629302'},
 {key: '4955',
  value: 'Francis Xavier Engineering College\n(AUTONOMOUS), Vannarpettai, Tirunelveli District'},
 {key: '5907',
  value: 'Mohamed Sathak Engineering College, Kilakarai,\nRamanathapuram District 623806'},
 {key: '5913',
  value: 'R V S College of Engineering , N Paraipatti Post, Dindigul District 624005'},
 {key: '2006SS',
  value: 'PSG College of Technology (AUTONOMOUS), Peelamedu, Coimbatore District 641004'},
 {key: '322D',
  value: 'D.D Goverdhan Doss Vaishnav College (Co-Ed),\nGokul Bagh, 833, Periyar E.V.R. High Road,'},
 {key: '344A',
  value: 'Jamal Mohamed College, Post Box No.808, 7 Race\nCourse Road, Khajanagar,Tiruchirappalli-620 020'},
 {key: '344S',
  value: 'Jamal Mohamed College, Post Box No.808, 7 Race\nCourse Road, Khajanagar,Tiruchirappalli-620 020'},
 {key: '364D',
  value: 'Meenakshi College for Women(A), 363 Arcot Salai,\nKodambakkam, Chennai-600 024 (Day)'},
 {key: '364E', value: 'Meenakshi College for Women(A), 363 Arcot Salai,'}]


  async function sendReq() {
    // const a = async () => {
    const data = new FormData()
    data.append('sl', selected)
    data.append('sw', parseFloat(per))
    data.append('pl', selecte)
    // data.append('pw', req.pw)
    const b = await fetch('https://mad-project-app.herokuapp.com/predict', {
      method: 'POST',
      body: data
    })
    const re = await b.json()
    setScol(re.avail)
    let s = "You can't get into your desired college"
    if (re.pred == false) {
      setRes(s)
    } else {
      s = "You can get into your desired college"
      setRes(s)
    }

    navigation.navigate('Res', {
      p:s,
      c:re.avail,
    })
  }


  return (
    <ScrollView>
      <Text></Text>
      <Text style={styles.t2}>College Predictor</Text>
      <Text></Text>
      <Text></Text>
      <View>
        <Text style={styles.cent}>     Percentile:</Text>
      </View>
      <TextInput
        style={styles.text1}
        // placeholder='Enter Email'
        autoCapitalize='none'
        autoCorrect={false}
        value={per}
        onChangeText={(newText) => setPer(newText)}
      />
      <View>
        <Text style={styles.cent}>     College Code:</Text>
      </View>
      {/* <TextInput
        style={styles.text1}
        // placeholder='Enter Password'
        autoCapitalize='none'
        autoCorrect={false}
        value={col}
        onChangeText={(newText) => setCol(newText)}
      /> */}
      <View style={styles.tex1}>
        <SelectList
          data={collegelist}
          setSelected={setSelecte}
          placeholder='Select College'
        />
      </View>
      <View>
        <Text style={styles.cent}>     Catagory:</Text>
      </View>
      <View style={styles.tex1}>
        <SelectList
          data={data}
          setSelected={setSelected}
          search={false}
          placeholder='Select Catagory'
        />
      </View>
      {/* <View style={styles.button3}>
                <Button
                    title="Predict"
                    color="grey"
                    onPress={sendReq}
                />
            </View> */}
      <TouchableOpacity onPress={sendReq} style={{ backgroundColor: 'grey', padding: 15, borderRadius: 10, marginVertical: 30, marginHorizontal: 90 }}>
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Predict</Text>
      </TouchableOpacity>
      <>
        {/* <Text>{res}</Text> */}
      </>
      <>

        <>

          {/* {scol.map((x, i) => <Text key={i}>{x}</Text>)} */}
        </>


      </>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text1: {
    margin: 20,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    fontSize: 18,
  },
  tex1: {
    margin: 20,
    // backgroundColor:'#F0EEEE',
    // height:50,
    // borderRadius:5,
    // flexDirection:'row',
    fontSize: 18,
  },
  button1: {
    marginVertical: 15,
  },
  button2: {
    marginBottom: 15,
  },
  button3: {
    marginHorizontal: 100,
    marginBottom: 15,
  },
  t2: {
    fontSize: 25,
    alignSelf: 'center',
  },
  img: {
    alignItems: 'center',
    top: 20,
  },
  im: {
    fontSize: 18,
    alignItems: 'center',
  },
  cent: {
    alignItems: 'center',
    fontSize: 16,
  }
})

export default Pred
