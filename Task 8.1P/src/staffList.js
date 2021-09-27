import faker from 'faker'


const staffList = [
    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle(),
        "rating": faker.random.number({min:1,max:5})

    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()   ,
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 2,        
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()   ,
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 3,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 4,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle() , 
        "rating": faker.random.number({min:1,max:5}) 
    },  
    {
        "key": 5,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 6,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 7,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 8,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 9,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 10,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    },
    {
        "key": 11,
        "avatar": faker.image.avatar(),
        "name": faker.name.findName(),
        "position": faker.name.jobTitle()  , 
        "rating": faker.random.number({min:1,max:5})
    }
 
]

export default staffList