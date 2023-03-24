const langs = {
  TR: "EN",
  EN: "TR",
};

const menu = [
  {
    TR: "Misyonumuz",
    EN: "Our Vision",
  },
  {
    TR: "Nasıl çalışır?",
    EN: "How it works?",
  },
  {
    TR: "Takımımız",
    EN: "Team",
  },
  {
    TR: "İletişim",
    EN: "Contact",
  },
];

const flashContent = {
  title: {
    EN: "Transparent and Trustworthy Vote Counting based on Web3",
    TR: "Blok Zincir Tabanlı Şeffaf Oy Sayma Uygulaması",
  },
  content: {
    EN: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, dictum ut sapien vel, pellentesque semper metus. Curabitur finibus orci id odio hendrerit, 
        ac tristique orci posuere. Sed auctor sapien magna. Nam suscipit volutpat lorem, eu pretium libero rutrum non. Sed placerat rhoncus ullamcorper. Duis augue ex, cursus
         nec mattis non, maximus id neque. Mauris tempor rutrum sapien, nec bibendum mauris eleifend interdum. Etiam lobortis est vehicula, maximus massa a, hendrerit justo. 
         Maecenas finibus nisl eu leo pellentesque, eu egestas libero rutrum. In hac habitasse platea dictumst. 
        `,
    TR: `
            Beş ODTÜ Bilgisayar Mühendisliği öğrencisi olarak, veri güvenilirliği ile ilgili sorunlar üzerine
                    yaptığımız
                    araştırmalar sonucunda bu projeye başladık. Merkezi sistemlerde saklanan verilerin manipülasyona
                    açık olması,
                    güvensizliği beraberinde getiriyor. Halkın tamamını ilgilendiren konularda, blok zincir tabanlı bir
                    sistem ile verilere
                    sahip olması, aracı kurumları ortadan kaldırarak güvensizlik sorununu da çözecektir.
        `,
  },
};

const visionSection = {
  title: {
    EN: "Our Vision",
    TR: "Misyonumuz",
  },
  content: {
    EN: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, dictum ut sapien vel, pellentesque semper metus. Curabitur finibus orci id odio hendrerit, ac tristique orci posuere. 
            Sed auctor sapien magna. Nam suscipit volutpat lorem, eu pretium libero rutrum non. Sed placerat rhoncus ullamcorper. Duis augue ex, cursus nec mattis non, maximus id neque. Mauris tempor rutrum sapien, 
            nec bibendum mauris eleifend interdum. Etiam lobortis est vehicula, maximus massa a, hendrerit justo. Maecenas finibus nisl eu leo pellentesque, eu egestas libero rutrum. In hac habitasse platea dictumst. In sit amet purus nisi. 
            Maecenas eu sapien ut massa dapibus blandit ac quis lectus. Aenean et ante id neque tempus maximus. Nulla aliquet iaculis ligula sodales facilisis. 
        `,
    TR: `
            Anlık seçim sonuçları, oy sayımı sürecinde hem siyasi partiler hem de halk için önemli bir veridir.
                    Günümüzde bu veri,
                    merkezi sistemler tarafından halka sunulmaktadır. Projemizdeki amacımız, sandık başındaki siyasi
                    parti görevlilerinin
                    edindikleri oy verilerini arada merkezi bir kurum olmadan halkla paylaşmalarını sağlamaktır.
        `,
  },
};

const howItWorks = {
  title: {
    EN: "How It Works?",
    TR: "Sistem Nasıl Çalışıyor?",
  },
  content: {
    EN: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, dictum ut sapien vel, pellentesque semper metus.
                Curabitur finibus orci id odio hendrerit, ac tristique orci posuere. Sed auctor sapien magna. Nam suscipit volutpat lorem, 
                eu pretium libero rutrum non. Sed placerat rhoncus ullamcorper. Duis augue ex, cursus nec mattis non, maximus id neque. Mauris
              tempor rutrum sapien, nec bibendum mauris eleifend interdum. Etiam lobortis est vehicula, maximus massa a, hendrerit justo. 
              Maecenas finibus nisl eu leo pellentesque, eu egestas libero rutrum. In hac habitasse platea dictumst. In sit amet purus nisi. 
              Maecenas eu sapien ut massa dapibus blandit ac quis lectus. Aenean et ante id neque tempus maximus. Nulla aliquet iaculis ligula
               sodales facilisis.
            </p>
            <img class="section-content-image" src="images/example.jpeg"></img>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, dictum ut sapien vel, pellentesque semper metus.
            Curabitur finibus orci id odio hendrerit, ac tristique orci posuere. Sed auctor sapien magna. Nam suscipit volutpat lorem, 
            eu pretium libero rutrum non. Sed placerat rhoncus ullamcorper. Duis augue ex, cursus nec mattis non, maximus id neque. Mauris
          tempor rutrum sapien, nec bibendum mauris eleifend interdum. Etiam lobortis est vehicula, maximus massa a, hendrerit justo. 
          Maecenas finibus nisl eu leo pellentesque, eu egestas libero rutrum. In hac habitasse platea dictumst. In sit amet purus nisi. 
          Maecenas eu sapien ut massa dapibus blandit ac quis lectus. Aenean et ante id neque tempus maximus. Nulla aliquet iaculis ligula
           sodales facilisis.
        </p>
            `,
    TR: `
            Proje kapsamında, ana blok zincir ağlarındaki yavaşlık ve işlem ücretleri sorunlarından kaçınmak
                    için Avalanche subnet
                    teknolojisini kullanarak özel bir blok zinciri geliştirdik. Hedefimiz, üç saat içinde 600 bin işlemi işleyebilecek bir kapasiteye sahip olmak. 
                    Tek bir blok zinciri, bu yükü yönetmek için yeterli olmayacaktır. Bu nedenle, 
                    Avalanche Subnet teknolojisi sayesinde sharding yaparak fiziksel olarak blok zincirlerini bölüp hedeflediğimiz etkileşim yükünü yönetebiliriz. 
                    Bu amaçla, dört farklı subnet kurmayı planlıyoruz. Oy verileri bu blok zincirlerinde
                    saklanmakta ve veri girişleri
                    akıllı sözleşmeler aracılığıyla denetlenmektedir. Bu sayede, yalnızca yetkilendirilmiş kullanıcılar
                    oy verisi girişi
                    yapabilirler.
                    <br />
                    <br />
                    <img class="diagram-img" src="./images/diagram.png"/>
                    <br />
                    <br />
                    Oy verisi girişi yapmak isteyen kullanıcılar, tarafımızdan geliştirilen mobil uygulama ile sisteme
                    kayıt olabilirler.
                    Kayıt olurken, blok zincir ile iletişime geçmelerini
                    sağlaycak bir cüzdan oluşturabilirler. Daha
                    sonra, gözlemci olabilecekleri sandıklar üzerinden sisteme kayıtlı siyasi partilerden yetkilendirme
                    isteyebilirler.
                    Yetkileri onaylandıktan sonra, oy verilerini blok zincire kaydedebilirler. Veri girişinde bulunan
                    yetkililerin kimlik bilgileri, gizli kalacak ve halka açık olmayacaktır. Sadece bu yetkililerin
                    kayıtlı olduğu siyasi partilerin isimleri gözükecektir. Böylece, veri girişi sırasında herhangi bir
                    kişisel bilgi
                    paylaşımı yapılmamış olacaktır. Bu sistem sayesinde farklı parti görevlilerinin aynı sandıkta
                    girdikleri oy sonuçları halka ve karşılaştırmaya açık olacaktır.
                    <br />
                    <br />
                    Parti yetkilileri, geliştirdiğimiz yönetici platformu sayesinde sandık görevlilerini kolaylıkla yönetebiliyorlar. Mobil uygulama üzerinden sisteme 
                    kayıt olan ve sandık görevi için başvuran kullanıcılar, parti yetkilileri tarafından görüntülenebiliyor. Bu platformda, hiyerarşik bir yetkilendirme 
                    sistemi oluşturduk. Ülke, il ve ilçe düzeyindeki yetkililer, kendi yetki alanlarına başvuran kullanıcıları sandık görevlisi olarak onaylayabiliyorlar. 
                    Parti yetkilileri, bu platform aracılığıyla sandık görevlilerini atayabilirler ve hangi sandıkta kaç görevli olduğu veya hangi sandıkta görevli olmadığı 
                    gibi bilgilere kolayca erişebilirler.
                    <br />
                    <br />
                    Graph Protocol ile geliştirdiğimiz indexing sunucumuz ise düzenli olarak blokzincirdeki verileri
                    işleyecek ve formatlayıp güvenli bir veritabanına yazacaktır. Web uygulamamız, bu veri tabanındaki
                    verileri
                    çekip halka sunacaktır. Burada kullanıcı kolaylığını amaçlıyoruz ve normal bir kullanıcı için hızlı
                    bir şekilde veriye ulaşım sağlıyoruz. Web uygulamamızdaki verilerin doğruluğu ise validator node'lar
                    tarafından yapılabilecektir. Bu sayede veri hem manipülasyondan uzak hem de hızlı bir şekilde
                    erişilebilir olacaktır.
                    <br />
                    <br />
                    Kimlik bilgileri ile bize ulaşan ve teknolojik donanıma sahip olan herkese validator node yetkisi
                    vermeyi planlıyoruz. Buradaki amaç ise sistemi olabildiğince merkeziyetsiz hale getirmektir.
            `,
  },
};

const contact = {
  title: {
    EN: "Contact",
    TR: "İletişim",
  },
  content: {
    EN: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, dictum ut sapien vel, pellentesque semper metus. Curabitur 
            finibus orci id odio hendrerit, ac tristique orci posuere. Sed auctor sapien magna. Nam suscipit volutpat lorem, eu pretium libero 
            rutrum non. Sed placerat rhoncus ullamcorper. Duis augue ex, cursus nec mattis non, maximus id neque. Mauris tempor rutrum sapien, 
            nec bibendum mauris eleifend interdum. Etiam lobortis est vehicula, maximus massa a, hendrerit justo. Maecenas finibus nisl eu leo 
            pellentesque, eu egestas libero rutrum. In hac habitasse platea dictumst. In sit amet purus nisi. Maecenas eu sapien ut massa dapibus 
            blandit ac quis lectus. Aenean et ante id neque tempus maximus. Nulla aliquet iaculis ligula sodales facilisis. 
        `,
    TR: `
            <div class="section-content">
                    <div>
                        fazli.balkan@metu.edu.tr
                    </div>
                    <div>
                        mehmet.tokgoz@metu.edu.tr
                    </div>
                    <div>
                        onur.yuce@metu.edu.tr
                    </div>
                    <div>
                        tunahan.dundar@metu.edu.tr
                    </div>
                    <div>
                        mirza.oksuz@metu.edu.tr
                    </div>
                </div>
        `,
  },
};

const team = {
  title: {
    TR: "Takımımız",
    EN: "Team",
  },
};
