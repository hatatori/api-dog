const lista = [
    {
        nome: "Labrador Retriever",
        imagem: "./racas/labrador_retriever.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Extremamente amigável, inteligente e sociável. Ideal para famílias e como cão-guia.",
        peso_medio: 30,
        nacionalidade: "Canadá"
    },
    {
        nome: "Golden Retriever",
        imagem: "./racas/golden_retriever.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Gentil, leal e brincalhão. Um dos cães mais dóceis e fáceis de treinar.",
        peso_medio: 32,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Bulldog Francês",
        imagem: "./racas/bulldog_frances.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 1,
        descricao: "Companheiro carinhoso e tranquilo, mas pode ser teimoso. Ideal para ambientes internos.",
        peso_medio: 12,
        nacionalidade: "França"
    },
    {
        nome: "Pastor Alemão",
        imagem: "./racas/pastor_alemao.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 4,
        descricao: "Muito inteligente, protetor e enérgico. Excelente para trabalho policial e guarda.",
        peso_medio: 35,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Poodle (Toy, Mini e Standard)",
        imagem: "./racas/poodle.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 1,
        descricao: "Muito inteligente e ativo. Se adapta bem a diferentes estilos de vida e tamanhos de lar.",
        peso_medio: 15,
        nacionalidade: "França"
    },
    {
        nome: "Bulldog Inglês",
        imagem: "./racas/bulldog_ingles.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Calmo, teimoso e afetuoso. Costuma ser preguiçoso e ótimo para ambientes internos.",
        peso_medio: 24,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Beagle",
        imagem: "./racas/beagle.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 2,
        descricao: "Alegre, curioso e cheio de energia. Pode ser teimoso e exige socialização.",
        peso_medio: 11,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Dachshund (Salsicha)",
        imagem: "./racas/dachshund.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 1,
        descricao: "Corajoso, teimoso e brincalhão. Muito protetor com os donos.",
        peso_medio: 9,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Rottweiler",
        imagem: "./racas/rottweiler.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 8,
        descricao: "Protetor, forte e dominante. Exige adestramento e dono experiente.",
        peso_medio: 50,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Yorkshire Terrier",
        imagem: "./racas/yorkshire_terrier.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, destemido e muito apegado ao dono. Late bastante.",
        peso_medio: 3,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Boxer",
        imagem: "./racas/boxer.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Brincalhão, leal e cheio de energia. Pode ser protetor com a família.",
        peso_medio: 30,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Shih Tzu",
        imagem: "./racas/shih_tzu.jpg",
        nivel_ameaca: 1,
        nivel_letalidade: 1,
        descricao: "Muito dócil, tranquilo e apegado à família. Excelente para ambientes pequenos.",
        peso_medio: 5,
        nacionalidade: "Tibete/China"
    },
    {
        nome: "Border Collie",
        imagem: "./racas/border_collie.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 1,
        descricao: "Extremamente inteligente, ativo e obediente. Precisa de bastante estímulo mental.",
        peso_medio: 20,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Pug",
        imagem: "./racas/pug.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Carinhoso, teimoso e brincalhão. Requer cuidados com a respiração.",
        peso_medio: 8,
        nacionalidade: "China"
    },
    {
        nome: "Corgi (Pembroke Welsh)",
        imagem: "./racas/corgi.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 1,
        descricao: "Ativo, leal e muito expressivo. Gosta de estar perto da família.",
        peso_medio: 12,
        nacionalidade: "País de Gales"
    },
    {
        nome: "Chihuahua",
        imagem: "./racas/chihuahua.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Muito pequeno, alerta e apegado. Pode ser temperamental com estranhos.",
        peso_medio: 2,
        nacionalidade: "México"
    },
    {
        nome: "Doberman",
        imagem: "./racas/doberman.jpg",
        nivel_ameaca: 7,
        nivel_letalidade: 6,
        descricao: "Inteligente, leal e protetor. Excelente cão de guarda e trabalho.",
        peso_medio: 40,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Maltês",
        imagem: "./racas/maltes.jpg",
        nivel_ameaca: 1,
        nivel_letalidade: 1,
        descricao: "Pequeno, dócil e afetuoso, ótimo para ambientes internos e famílias.",
        peso_medio: 3,
        nacionalidade: "Itália"
    },
    {
        nome: "Husky Siberiano",
        imagem: "./racas/husky_siberiano.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Raça energética, independente e com forte instinto de matilha. Exige espaço e exercícios.",
        peso_medio: 22,
        nacionalidade: "Rússia"
    },
    {
        nome: "Pastor Australiano",
        imagem: "./racas/pastor_australiano.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 3,
        descricao: "Extremamente inteligente e ativo, excelente cão de pastoreio e companhia.",
        peso_medio: 15,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Schnauzer",
        imagem: "./racas/schnauzer.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Alerta, protetor e leal. Ideal para famílias e vigilância doméstica.",
        peso_medio: 12,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Spitz Alemão (Lulu da Pomerânia)",
        imagem: "./racas/spitz_alemao.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, brincalhão e bastante apegado ao dono. Muito inteligente.",
        peso_medio: 3,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Boston Terrier",
        imagem: "./racas/boston_terrier.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Sociável, calmo e de fácil adaptação. Excelente cão de companhia.",
        peso_medio: 8,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Buldogue Americano",
        imagem: "./racas/buldogue_americano.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 6,
        descricao: "Forte, corajoso e protetor. Exige socialização e adestramento firmes.",
        peso_medio: 35,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Akita Inu",
        imagem: "./racas/akita_inu.jpg",
        nivel_ameaca: 7,
        nivel_letalidade: 7,
        descricao: "Reservado com estranhos, muito leal à família. Forte e dominante.",
        peso_medio: 34,
        nacionalidade: "Japão"
    },
    {
        nome: "Staffordshire Bull Terrier",
        imagem: "./racas/staffordshire_bull_terrier.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 8,
        descricao: "Musculoso, brincalhão e corajoso. Bom com crianças, mas requer supervisão.",
        peso_medio: 15,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Cane Corso",
        imagem: "./racas/cane_corso.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 8,
        descricao: "Cão de guarda poderoso, leal e territorial. Necessita de liderança firme.",
        peso_medio: 45,
        nacionalidade: "Itália"
    },
    {
        nome: "Cocker Spaniel Inglês",
        imagem: "./racas/cocker_spaniel_ingles.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Alegre, sociável e muito apegado ao dono. Requer exercícios diários.",
        peso_medio: "13–16 kg",
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Basset Hound",
        imagem: "./racas/basset_hound.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Calmo, afetuoso e com ótimo faro. Ideal para ambientes tranquilos.",
        peso_medio: 25,
        nacionalidade: "França/Reino Unido"
    },
    {
        nome: "Weimaraner",
        imagem: "./racas/weimaraner.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Ágil, forte e muito inteligente. Exige atividade intensa e estímulos mentais.",
        peso_medio: "25–40 kg",
        nacionalidade: "Alemanha"
    },
    {
        nome: "Shar Pei",
        imagem: "./racas/shar_pei.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Independente e protetor. Pode ser territorial e reservado com estranhos.",
        peso_medio: 22,
        nacionalidade: "China"
    },
    {
        nome: "Bully americano",
        imagem: "./racas/bully_americano.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 10,
        descricao: "Musculoso e confiante. Amável com a família, mas exige socialização.",
        peso_medio: 32,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Pit Bull Terrier Americano",
        imagem: "./racas/pit_bull_terrier_americano.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 8,
        descricao: "Muito forte e energético. Exige socialização e treinamento constante.",
        peso_medio: 23,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Bernese Mountain Dog (Boiadeiro de Berna)",
        imagem: "./racas/bernese_mountain_dog_boiadeiro_de_berna.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Gentil, leal e calmo. Excelente cão de família e trabalhos em fazendas.",
        peso_medio: 40,
        nacionalidade: "Suíça"
    },
    {
        nome: "West Highland White Terrier",
        imagem: "./racas/west_highland_white_terrier.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, alerta e curioso. Muito sociável e ótimo para crianças.",
        peso_medio: 7,
        nacionalidade: "Escócia"
    },
    {
        nome: "Samoieda",
        imagem: "./racas/samoieda.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Afetuoso, brincalhão e com pelagem espessa. Requer escovação constante.",
        peso_medio: 25,
        nacionalidade: "Rússia (Sibéria)"
    },
    {
        nome: "Setter Irlandês",
        imagem: "./racas/setter_irlandes.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Elegante e cheio de energia. Precisa de exercícios e espaço para correr.",
        peso_medio: 28,
        nacionalidade: "Irlanda"
    },
    {
        nome: "Scottish Terrier",
        imagem: "./racas/terrier_escoces.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 2,
        descricao: "Teimoso, valente e protetor. Bom cão de guarda em pequeno porte.",
        peso_medio: 9,
        nacionalidade: "Escócia"
    },
    {
        nome: "Basenji",
        imagem: "./racas/basenji.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Independente, silencioso (não late) e curioso. Muito limpo.",
        peso_medio: 10,
        nacionalidade: "Congo"
    },
    {
        nome: "Dálmata",
        imagem: "./racas/dalmata.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Ativo, amigável e com forte instinto de proteção. Precisa de atividade constante.",
        peso_medio: 24,
        nacionalidade: "Croácia"
    },
    {
        nome: "Airedale Terrier",
        imagem: "./racas/airedale_terrier.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 3,
        descricao: "O maior dos terriers. Corajoso, ativo e excelente cão de guarda e caça.",
        peso_medio: 25,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Lhasa Apso",
        imagem: "./racas/lhasa_apso.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, protetor e afetuoso. Muito ligado ao dono e reservado com estranhos.",
        peso_medio: 7,
        nacionalidade: "Tibete"
    },
    {
        nome: "Fox Terrier",
        imagem: "./racas/fox_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Ativo, caçador e destemido. Requer exercícios e adestramento firmes.",
        peso_medio: 7,
        nacionalidade: "Inglaterra"
    },
    {
        nome: "Collie",
        imagem: "./racas/collie.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão muito inteligente e leal, ótimo com crianças e fácil de treinar.",
        peso_medio: 25,
        nacionalidade: "Escócia/Inglaterra"
    },
    {
        nome: "Shetland Sheepdog (Sheltie)",
        imagem: "./racas/pastor_shetland.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno pastor, muito inteligente e afetuoso, ótimo cão de família.",
        peso_medio: 8,
        nacionalidade: "Escócia"
    },
    {
        nome: "Whippet",
        imagem: "./racas/whippet.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão rápido e elegante, dócil e tranquilo em casa.",
        peso_medio: 15,
        nacionalidade: "Inglaterra"
    },
    {
        nome: "Alaskan Malamute",
        imagem: "./racas/malamute_do_alasca.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Forte, resistente e independente, bom para climas frios.",
        peso_medio: 36,
        nacionalidade: "Estados Unidos (Alasca)"
    },
    {
        nome: "Chow-chow",
        imagem: "./racas/chow_chow.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 5,
        descricao: "Reservado e independente, pode ser territorial e necessita socialização.",
        peso_medio: 25,
        nacionalidade: "China"
    },
    {
        nome: "Chesapeake Bay Retriever",
        imagem: "./racas/chesapeake_bay_retriever.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Excelente nadador e trabalhador, leal e protetor da família.",
        peso_medio: 28,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Cairn Terrier",
        imagem: "./racas/cairn_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Pequeno, corajoso e curioso, muito apegado ao dono.",
        peso_medio: 7,
        nacionalidade: "Escócia"
    },
    {
        nome: "Pequinês",
        imagem: "./racas/pequines.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno e independente, mas muito afetuoso com a família.",
        peso_medio: 5,
        nacionalidade: "China"
    },
    {
        nome: "Leonberger",
        imagem: "./racas/leonberger.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Grande e majestoso, gentil e excelente com crianças.",
        peso_medio: 50,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Pastor belga (Belgian Sheepdog)",
        imagem: "./racas/pastor_belga.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Muito inteligente e alerta, ótimo cão de guarda e pastoreio.",
        peso_medio: "20–30 kg",
        nacionalidade: "Bélgica"
    },
    {
        nome: "Bloodhound",
        imagem: "./racas/bloodhound.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Excepcional farejador, dócil e afetuoso, precisa de espaço para exercícios.",
        peso_medio: 40,
        nacionalidade: "Bélgica/Inglaterra"
    },
    {
        nome: "Papillon",
        imagem: "./racas/papillon.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno e elegante, muito inteligente e afetuoso.",
        peso_medio: 4,
        nacionalidade: "França"
    },
    {
        nome: "Bichon Frisé",
        imagem: "./racas/bichon_frise.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, alegre e muito sociável, ótimo para ambientes familiares.",
        peso_medio: 7,
        nacionalidade: "França/Bélgica"
    },
    {
        nome: "Bull Terrier",
        imagem: "./racas/bull_terrier.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 5,
        descricao: "Robusto e corajoso, exige socialização e treinamento firmes.",
        peso_medio: 30,
        nacionalidade: "Inglaterra"
    },
    {
        nome: "Brussels Griffon",
        imagem: "./racas/brussels_griffon.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, vivaz e inteligente, adora companhia humana e é muito afetuoso.",
        peso_medio: 4,
        nacionalidade: "Bélgica"
    },
    {
        nome: "Dogue Alemão (Great Dane)",
        imagem: "./racas/dogue_alemao.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Gigante gentil, calmo e muito leal, ideal para famílias grandes.",
        peso_medio: 60,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Duck tolling retriever da Nova Escócia (Nova Scotia Duck Tolling Retriever)",
        imagem: "./racas/duck_tolling_retriever_da_nova_escócia.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Ativo e inteligente, excelente para atividades ao ar livre e caça.",
        peso_medio: 20,
        nacionalidade: "Canadá"
    },
    {
        nome: "Boiadeiro-australiano (Australian Cattle Dog)",
        imagem: "./racas/boiadeiro-australiano.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Energético e protetor, excelente para trabalhos rurais e pastoreio.",
        peso_medio: 17,
        nacionalidade: "Austrália"
    },
    {
        nome: "Terrier Tibetano",
        imagem: "./racas/terrier_tibetano.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Pequeno e resistente, muito leal e protetor com a família.",
        peso_medio: 6,
        nacionalidade: "Tibete"
    },
    {
        nome: "Lébrel irlandês (Irish Wolfhound)",
        imagem: "./racas/lebrel_irlandes.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Um dos maiores cães do mundo, dócil e gentil, ideal para famílias.",
        peso_medio: 50,
        nacionalidade: "Irlanda"
    },
    {
        nome: "Komondor",
        imagem: "./racas/komodor.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 5,
        descricao: "Cão de guarda poderoso e independente, famoso pelo pelo longo e cordado.",
        peso_medio: 50,
        nacionalidade: "Hungria"
    },
    {
        nome: "Borzoi",
        imagem: "./racas/borzoi.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Elegante e veloz, dócil e reservado, ótimo cão de companhia.",
        peso_medio: 35,
        nacionalidade: "Rússia"
    },
    {
        nome: "Keeshond",
        imagem: "./racas/keeshond.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Cão amigável, inteligente e alerta, ótimo para famílias.",
        peso_medio: 18,
        nacionalidade: "Países Baixos"
    },
    {
        nome: "Pastor-da-anatólia (Anatolian Shepherd Dog)",
        imagem: "./racas/pastor_da_anatolia.jpg",
        nivel_ameaca: 7,
        nivel_letalidade: 6,
        descricao: "Cão de guarda forte e territorial, muito independente e protetor.",
        peso_medio: 47,
        nacionalidade: "Turquia"
    },
    {
        nome: "Lagotto Romagnolo",
        imagem: "./racas/lagotto_romagnolo.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Cão truficultor, inteligente, afetuoso e com pelagem cacheada.",
        peso_medio: 14,
        nacionalidade: "Itália"
    },
    {
        nome: "Saluki",
        imagem: "./racas/saluki.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão de caça rápido e elegante, reservado mas leal.",
        peso_medio: 18,
        nacionalidade: "Oriente Médio"
    },
    {
        nome: "Shiba Inu",
        imagem: "./racas/shiba_inu.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Independente, inteligente e alerta, muito popular no Japão.",
        peso_medio: 9,
        nacionalidade: "Japão"
    },
    {
        nome: "Kuvasz",
        imagem: "./racas/kuvasz.jpg",
        nivel_ameaca: 6,
        nivel_letalidade: 5,
        descricao: "Cão de guarda húngaro, corajoso e protetor da família e do território.",
        peso_medio: 40,
        nacionalidade: "Hungria"
    },
    {
        nome: "Spitz finlandês (Finnish Spitz)",
        imagem: "./racas/spitz_finlandes.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Muito vocal e ativo, excelente cão de caça e companhia.",
        peso_medio: 13,
        nacionalidade: "Finlândia"
    },
    {
        nome: "Pastor-de-beauce (Beauceron)",
        imagem: "./racas/pastor-de-beauce.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Cão de pastoreio e guarda, inteligente e obediente.",
        peso_medio: 35,
        nacionalidade: "França"
    },
    {
        nome: "Tervuren (Belgian Tervuren)",
        imagem: "./racas/tervuren.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Versão elegante do Pastor Belga, ativo e leal.",
        peso_medio: 25,
        nacionalidade: "Bélgica"
    },
    {
        nome: "Norfolk Terrier",
        imagem: "./racas/norfolk_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Pequeno, corajoso e muito amigável, ótimo para famílias e como cão de companhia.",
        peso_medio: 6,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Terrier Irlandês do Glen do Imaal (Glen of Imaal Terrier)",
        imagem: "./racas/terrier_irlandes_do_glen_do_imaal.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Terrier robusto e trabalhador, com natureza protetora e independente.",
        peso_medio: 15,
        nacionalidade: "Irlanda"
    },
    {
        nome: "Boiadeiro de Entlebuch (Entlebucher Mountain Dog)",
        imagem: "./racas/boiadeiro_de_entlebuch.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Cão de trabalho ágil e resistente, ótimo para pastoreio e companhia.",
        peso_medio: 23,
        nacionalidade: "Suíça"
    },
    {
        nome: "São Bernardo",
        imagem: "./racas/sao_bernardo.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Gigante gentil, conhecido pelo resgate em montanhas e pelo temperamento calmo.",
        peso_medio: 90,
        nacionalidade: "Suíça"
    },
    {
        nome: "Clumber Spaniel",
        imagem: "./racas/clumber_spaniel.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Cão calmo, afetuoso e excelente companheiro, com pelagem densa e pesada.",
        peso_medio: 34,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Terrier Americano sem pêlo (American Hairless Terrier)",
        imagem: "./racas/terrier_americano_sem_pelo.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno e enérgico, ideal para quem busca um cão sem pelos, afetuoso e inteligente.",
        peso_medio: 5,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Setter Inglês (English Setter)",
        imagem: "./racas/setter_ingles.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão elegante e gentil, muito ativo e excelente em caça e companhia.",
        peso_medio: 25,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Pinscher",
        imagem: "./racas/pinscher.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Pequeno, ativo e corajoso, com personalidade forte e ótima para vigilância.",
        peso_medio: 5,
        nacionalidade: "Alemanha"
    },
    {
        nome: "Spitz dos Visigodos (Swedish Vallhund)",
        imagem: "./racas/spitz_dos_visigodos.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão ágil e inteligente, usado para pastoreio, com grande energia e sociabilidade.",
        peso_medio: 12,
        nacionalidade: "Suécia"
    },
    {
        nome: "Alabai",
        imagem: "./racas/alabai.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 7,
        descricao: "Cão de guarda muito forte e territorial, originário da Ásia Central.",
        peso_medio: 70,
        nacionalidade: "Ásia Central"
    },
    {
        nome: "Kangal",
        imagem: "./racas/kangal.jpg",
        nivel_ameaca: 9,
        nivel_letalidade: 8,
        descricao: "Cão pastor turco, famoso por sua força e proteção feroz do rebanho.",
        peso_medio: 60,
        nacionalidade: "Turquia"
    },
    {
        nome: "Boerboel",
        imagem: "./racas/boerboel.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 10,
        descricao: "Cão de guarda sul-africano, musculoso e protetor, ideal para propriedades rurais.",
        peso_medio: 73,
        nacionalidade: "África do Sul"
    },
    {
        nome: "Bullmastiff",
        imagem: "./racas/bullmastiff.jpg",
        nivel_ameaca: 7,
        nivel_letalidade: 6,
        descricao: "Cão de guarda poderoso, calmo e leal, muito eficiente na proteção.",
        peso_medio: 47,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Otterhound",
        imagem: "./racas/otterhound.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão de caça com ótimo olfato, pelagem densa e personalidade amigável.",
        peso_medio: 42,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Dogo Argentino",
        imagem: "./racas/dogo_argentino.jpg",
        nivel_ameaca: 8,
        nivel_letalidade: 8,
        descricao: "Cão de caça forte e corajoso, muito protetor e com alta resistência.",
        peso_medio: 41,
        nacionalidade: "Argentina"
    },
    {
        nome: "Mastim Napolitano (Neapolitan Mastiff)",
        imagem: "./racas/mastim_napolitano.jpg",
        nivel_ameaca: 7,
        nivel_letalidade: 6,
        descricao: "Grande e imponente, protetor da família com temperamento calmo e reservado.",
        peso_medio: 60,
        nacionalidade: "Itália"
    },
    {
        nome: "Bedlington Terrier",
        imagem: "./racas/bedlington_terrier.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno e ágil, com aparência peculiar e comportamento afetuoso.",
        peso_medio: 9,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Pharaoh Hound",
        imagem: "./racas/pharaoh_hound.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão elegante e rápido, usado para caça, muito leal e brincalhão.",
        peso_medio: 20,
        nacionalidade: "Malta"
    },
    {
        nome: "Manchester Terrier",
        imagem: "./racas/manchester_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Terrier elegante, inteligente e afetuoso, excelente para companhia e vigilância.",
        peso_medio: 7,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Sealyham Terrier",
        imagem: "./racas/sealyham_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Pequeno e robusto, ótimo para caça e companhia, de natureza amigável.",
        peso_medio: 9,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Podengo Ibicenco (Ibizan Hound)",
        imagem: "./racas/podengo_ibicenco.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Cão de caça atlético e ágil, muito rápido e resistente.",
        peso_medio: 23,
        nacionalidade: "Espanha"
    },
    {
        nome: "Tibetan Spaniel",
        imagem: "./racas/spaniel_tibetano.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Pequeno, alerta e afetuoso, excelente cão de companhia.",
        peso_medio: 5,
        nacionalidade: "Tibete"
    },
    {
        nome: "Field Spaniel",
        imagem: "./racas/field_spaniel.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Ativo e amigável, bom cão de caça e família.",
        peso_medio: 21,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Skye Terrier",
        imagem: "./racas/skye_terrier.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Terrier de porte médio, leal e alerta, com pelagem longa característica.",
        peso_medio: 10,
        nacionalidade: "Reino Unido"
    },
    {
        nome: "Puli",
        imagem: "./racas/puli.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Cão pastor húngaro, famoso por sua pelagem cordada e alta energia.",
        peso_medio: 14,
        nacionalidade: "Hungria"
    },
    {
        nome: "Sloughi",
        imagem: "./racas/sloughi.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão de caça do deserto, rápido e resistente, muito leal e sensível.",
        peso_medio: 20,
        nacionalidade: "África do Norte"
    },
    {
        nome: "Plott Hound",
        imagem: "./racas/plott_hound.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 4,
        descricao: "Cão de caça corajoso e determinado, excelente para rastreamento de animais selvagens.",
        peso_medio: 26,
        nacionalidade: "Estados Unidos"
    },
    {
        nome: "Elkhound (Norwegian Elkhound)",
        imagem: "./racas/elkhound.jpg",
        nivel_ameaca: 4,
        nivel_letalidade: 3,
        descricao: "Cão de caça robusto e resistente, conhecido por sua coragem e lealdade.",
        peso_medio: 25,
        nacionalidade: "Noruega"
    },
    {
        nome: "Cão-finlandês-da-lapônia (Finnish Lapphund)",
        imagem: "./racas/cao-finlandes-da-laponia.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Cão pastor de temperamento doce, amigável e muito inteligente.",
        peso_medio: 22,
        nacionalidade: "Finlândia"
    },
    {
        nome: "Pastor-polonês-da-planície (Polish Lowland Sheepdog)",
        imagem: "./racas/pastor-de-beauce.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Cão pastor ágil e protetor, com pelagem densa e personalidade carinhosa.",
        peso_medio: 22,
        nacionalidade: "Polônia"
    },
    {
        nome: "Cão d'água espanhol (Spanish Water Dog)",
        imagem: "./racas/cao_dagua_espanhol.jpg",
        nivel_ameaca: 3,
        nivel_letalidade: 2,
        descricao: "Versátil cão de trabalho, ótimo nadador e excelente para pastoreio e caça.",
        peso_medio: 20,
        nacionalidade: "Espanha"
    },
    {
        nome: "Pelado-mexicano (Xoloitzcuintli)",
        imagem: "./racas/pelado-mexicano.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Raça antiga e rara, conhecida por sua pele sem pelos e natureza calma.",
        peso_medio: 20,
        nacionalidade: "México"
    },
    {
        nome: "Thai Ridgeback",
        imagem: "./racas/thai_ridgeback.jpg",
        nivel_ameaca: 5,
        nivel_letalidade: 3,
        descricao: "Cão atlético e independente, reconhecido pela crista de pelos ao longo das costas.",
        peso_medio: 20,
        nacionalidade: "Tailândia"
    },
    {
        nome: "Cão Esquimó Americano (American Eskimo Dog)",
        imagem: "./racas/cao_esquimo_americano.jpg",
        nivel_ameaca: 2,
        nivel_letalidade: 1,
        descricao: "Cão pequeno a médio, ativo e inteligente, com pelagem branca e personalidade amigável.",
        peso_medio: 13,
        nacionalidade: "Estados Unidos"
    }
]

// lista.sort((a, b) => a.nome.localeCompare(b.nome));
// lista.sort((a, b) => a.nacionalidade.localeCompare(b.nacionalidade));
// lista.sort((a, b) => a.peso_medio - b.peso_medio);
// lista.sort((a, b) => a.nivel_ameaca - b.nivel_ameaca);
// lista.sort((a, b) => a.nivel_letalidade - b.nivel_letalidade);

function render(arr) {


    window.scroll(0, 0)

    dogs.innerHTML = ''

    arr.map(e => {

        const div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = ` <div class='card-top'><img src='${e.imagem}'></div>
        <hr>
        <h5>${e.nome}</h5>
        <hr>
        <p>${e.descricao}</p>
        <p>Nac: ${e.nacionalidade}</p>
        <p>Peso médio: ${e.peso_medio}</p>
        <p>Ameaça: ${e.nivel_ameaca}</p>
        <p>Letalidade: ${e.nivel_letalidade}</p>
        `

        dogs.appendChild(div)

        div.querySelector('img').onclick = () => {
            foto.src = e.imagem
            box.checked = false
        }
    })
}






const bt_nome = document.querySelector(".bt_nome")
const bt_nivel_ameaca = document.querySelector(".bt_nivel_ameaca")
const bt_nivel_letalidade = document.querySelector(".bt_nivel_letalidade")
const bt_peso_medio = document.querySelector(".bt_peso_medio")
const bt_nacionalidade = document.querySelector(".bt_nacionalidade")

let ordem = {
    nome: true,
    nivel_ameaca: true,
    nivel_letalidade: true,
    peso_medio: true,
    nacionalidade: true
}

bt_nome.addEventListener('click', () => {
    lista.sort((a, b) => ordem.nome
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome))
    ordem.nome = !ordem.nome
    render(lista)
})

bt_nivel_ameaca.addEventListener('click', () => {
    lista.sort((a, b) => ordem.nivel_ameaca
        ? a.nivel_ameaca - b.nivel_ameaca
        : b.nivel_ameaca - a.nivel_ameaca)
    ordem.nivel_ameaca = !ordem.nivel_ameaca
    render(lista)
})

bt_nivel_letalidade.addEventListener('click', () => {
    lista.sort((a, b) => ordem.nivel_letalidade
        ? a.nivel_letalidade - b.nivel_letalidade
        : b.nivel_letalidade - a.nivel_letalidade)
    ordem.nivel_letalidade = !ordem.nivel_letalidade
    render(lista)
})

bt_peso_medio.addEventListener('click', () => {
    lista.sort((a, b) => ordem.peso_medio
        ? a.peso_medio - b.peso_medio
        : b.peso_medio - a.peso_medio)
    ordem.peso_medio = !ordem.peso_medio
    render(lista)
})

bt_nacionalidade.addEventListener('click', () => {
    lista.sort((a, b) => ordem.nacionalidade
        ? a.nacionalidade.localeCompare(b.nacionalidade)
        : b.nacionalidade.localeCompare(a.nacionalidade))
    ordem.nacionalidade = !ordem.nacionalidade
    render(lista)
})

render(lista)