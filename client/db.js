var db = function () {
    var events = [];
    
    events.push(
    {
        name: 'RadioItaliaLive Concert',
        description: 'It\'s the most famous italian music concert organized by Radio Italia. It takes place in Milano during june.',
        date: '28 may',
        image: 'http://2.bp.blogspot.com/-RhRqCUQYEY0/VRlkeyLK9YI/AAAAAAAAMxo/vvJ2XYnKA9I/s1600/1giugno.png',
        isFavorite: false,
        publisher: {
            name: 'Gastone',
            image: 'svg-5',
            photo: ''
        },
        comments: [
            {
                user: {
                    name: 'Elisabetta',
                    image: 'svg-6'
                },
                comment: 'I love it so much!'
            }
        ]
    });
    
    events.push(
    {
        name: 'Woodstock 2.0',
        description: 'This will be the best recreation of the original Woodstock Music & Art Fair',
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
                    name: 'Young Janet',
                    image: 'svg-6'
                },
                comment: 'I do NOT want to miss the 2.0 version ;)'
            },
            {
                user: {
                    name: 'Granny',
                    image: 'svg-9'
                },
                comment: 'I was there in 1969 and it was spectacular'
            }
        ]
    });
    events.push(
    {
        name: 'Lucca Summer Festival 2016',
        description: 'Lucca Summer Festival is a very famous musical event held in Lucca in each July from 1998. Performers like Bob Dylan, Elton John and Stevie Wonder tooks part in this festival.',
        date: '7 jul.',
        image: '/imgs/lucca-summer-festival1.jpg',
        isFavorite: true,
        publisher: {
            name: 'Anna',
            image: 'svg-8',
            photo: ''
        },
        comments: [
            {
                user: {
                    name: 'Lawrence',
                    image: 'svg-4'
                },
                comment: 'Last year Snoop Dogg performance was definitly COOL!!!'
            },
            {
                user: {
                    name: 'Sandra',
                    image: 'svg-9'
                },
                comment: 'Pino Daniele is the best in all the editions.'
            }
        ]
    });
    
    var balconies = [];
    
    balconies.push(
    {
        name: 'Piazza San Martino',
        description: 'Hi I\'m Andrea and this photo was taken from my balcony. This is a beautiful view of Piazza San Martino ',
        details: 'In my home I live with my beautiful wife Lucia, if you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://www.verdeazzurronotizie.it/wp-content/uploads/2015/05/IMG_1510-e1430827159249-1728x800_c.jpg',
        isAvailable: false,
        rate: 3,
        price: 9,
        publisher: {
            name: 'Andrea',
            image: 'svg-1'
        },
        features: [
            {
                kind: 'glass',
                comment: 'Aperitivo'
            }
        ]
    });
    
    
    
    balconies.push(
    {
        name: 'Piazza Napoleone',
        description: 'Hi all, my name is Laura and this is the fantastic view of Piazza Napoleone that you can have from my apartment.',
        details: 'In my home I live with my husband Davide. If you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://temi.repubblica.it/UserFiles/spettacoli-lucca-summer-festival-2015/Image/640x357-lsf.jpg',
        isAvailable: true,
        rate: 4,
        price: 12,
        publisher: {
            name: 'Laura',
            image: 'svg-3'
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
        name: 'Piazza Napoleone',
        description: 'Hi all, my name is Ernesto and this is the fantastic view of Piazza Napoleone that you can have from my apartment.',
        details: 'In my home I live with my beautiful wife Marina. If you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://www.tripnblog.it/wp-content/uploads/Lucca-Summer-Festival-2011-1.jpg',
        isAvailable: true,
        rate: 5,
        price: 18,
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
            },
            {
                kind: 'beer',
                comment: 'Drinks'
            }
        ]
    });
    
    balconies.push(
    {
        name: 'Piazza dell\'Anfiteatro',
        description: 'Hi I\'m Nicole and this photo was taken from my balcony. This is a beautiful view of Piazza dell\'Anfiteatro ',
        details: 'In my home I live with my beloved boyfriend, if you and your friends would like to come here, you will find a sweet family atmosphere and for a few hours (or maybe more) we can become friends while enjoying the beautifulness of Lucca Summer Festival.',
        date: '7 jul.',
        image: 'http://www.dovealucca.it/fotoelenco/foto/0139.jpg',
        isAvailable: false,
        rate: 4,
        price: 15,
        publisher: {
            name: 'Nicole',
            image: 'svg-8'
        },
        features: [
            {
                kind: 'glass',
                comment: 'Aperitivo'
            },
            {
                kind: 'cutlery',
                comment: 'Dinner'
            }
        ]
    });
    
    return {events: events, balconies: balconies};
};