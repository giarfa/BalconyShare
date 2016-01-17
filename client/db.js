var db = function () {
    var events = [];
    
    events.push(
    {
        name: 'Lucca Summer Festival 2016',
        description: 'Mustache esse vinyl, food truck celiac cold-pressed blue bottle minim non keytar austin nesciunt street art. Disrupt laboris farm-to-table, retro jean shorts umami dreamcatcher cray reprehenderit.',
        date: '7 jul.',
        image: '/imgs/lucca-summer-festival1.jpg',
        isFavorite: true,
        publisher: {
            name: 'Anna',
            image: 'svg-8',
            photo: ''
        },
        comments: [ ]
    });
    events.push(
    {
        name: 'Woodstock 2.0',
        description: 'Crucifix voluptate pitchfork, brunch leggings meggings slow-carb wolf chia food truck irure green juice viral. Nisi butcher fugiat, lumbersexual shoreditch whatever tempor photo booth microdosing mollit freegan cred mumblecore cold-pressed leggings. Literally blue bottle pinterest, scenester franzen mumblecore lomo dreamcatcher dolore intelligentsia do.',
        date: '15 aug.',
        image: 'http://www.loschermo.it/imagecache/articoli/foto1/woodstock_800_800.jpg',
        isFavorite: false,
        publisher: {
            name: 'Balcony Share',
            image: '',
            photo: '/imgs/BalconyShare.png'
        },
        comments: [
            {
                user: {
                    name: 'Lawrence',
                    image: 'svg-4'
                },
                comment: 'I do NOT want to miss the 2.0 version ;)'
            },
            {
                user: {
                    name: 'Lawrence',
                    image: 'svg-4'
                },
                comment: 'I do NOT want to miss the 2.0 version ;)'
            }
        ]
    });
    
    var balconies = [];
    
    balconies.push(
    {
        name: 'Lucca Summer Festival 2016',
        description: 'Hi all, my name is Ernesto and this is the fantastic view of Piazza Qualcosa that you can have from my apartment.',
        details: 'In my home I live with my beautiful wife Lucia. If you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://temi.repubblica.it/UserFiles/spettacoli-lucca-summer-festival-2015/Image/640x357-lsf.jpg',
        isAvailable: true,
        rate: 3,
        price: 12,
        publisher: {
            name: 'Ernesto',
            image: 'svg-5'
        },
        features: [
            {
                kind: 'glass',
                comment: 'Aperitivo'
            },
            {
                kind: 'coffee',
                comment: 'Espresso'
            }
        ]
    });
    
    balconies.push(
    {
        name: 'Lucca Summer Festival 2016',
        description: 'Mustache esse vinyl, food truck celiac cold-pressed blue bottle minim non keytar austin nesciunt street art. Disrupt laboris farm-to-table, retro jean shorts umami dreamcatcher cray reprehenderit.',
        details: 'In my home I live with my beautiful wife Lucia, if you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://temi.repubblica.it/UserFiles/spettacoli-lucca-summer-festival-2015/Image/640x357-lsf.jpg',
        isAvailable: false,
        rate: 5,
        price: 9,
        publisher: {
            name: 'Ernesto',
            image: 'svg-5'
        },
        features: [
            {
                kind: 'glass',
                comment: 'I do NOT want to miss the 2.0 version ;)'
            }
        ]
    });
    
    return {events: events, balconies: balconies};
};