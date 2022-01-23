const moviesModels = require ("../../db/models/moviesModels");

const getmovies = async (req, res) => {
    try {
        const movies = await moviesModels.find({}).populate("userId");
        // تبحث لي على جميع الاوبجكت الي بالاسكيما
        // populate تجيب لي user
        res.status(200).json(movies);
      } catch (error) {
        res.send(error);
      }
};

const postmovies = async (req, res) => {
    const {name, img,description,userId,comment , video} = req.body;
    const newmovies = new moviesModels({
        name,
        img,
        description,
        userId,
        comment,
        video
        
    })
    try {
        const savemovies = await newmovies.save();
        //تحفظ لي الموفي بقاعدة البيانات
        const movies = await moviesModels.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.send(error);
    }
};

const deleteMovies = async (req, res) => {
    const id = req.params.id;
    const userId = req.token.userId;

    try {
      const movies = await moviesModels.findOneAndDelete({ _id: id, user: userId })

        res.send(movies);
    } catch (error) {
      res.send(error);
    }
  };


const getComment = async (req, res)=> {
  const id = req.params.id
  console.log("------" , id);
  try {
  
    const comment = await moviesModels.findById(id)//.populate("user");
    // console.log(comment);
    res.status(200).json(comment);
  } catch (error) {
    res.send(error);
  }
}



const addComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  // console.log(id,"id")

  const user = req.token.userId;
  const userName=req.token.userName;
  moviesModels
    .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} }  },{
      new: true

    })
    .then((result) => {
   
      res.send(result.comment);
    }).catch(err=>{
      res.send(err)
    });
};

const deleteComment = (req, res) => {
  
  const movieId = req.params.id;
  const updateComments = req.body.comments;
  moviesModels
    .findOneAndUpdate({ _id: movieId }, { comment: updateComments },{
      new: true
    })
    .then((result) => {
      // console.log(result,"resulttt")
      res.send(result.comment);
    }).catch(err=>{
      res.send(err)
    });
};


const postvideo= async (req, res) => {
  const {name, img,description,userId,video} = req.body;
 
  const newmovies = new moviesModels({
      name,
      img,
      description,
      userId,
      video:video,
      
  })
  try {
      await newmovies.save();
      const video = await moviesModels.find({});
      res.status(200).json(video);
  } catch (error) {
      res.send(error);
  }
};

const updatemovies = async (req, res) => {
  
  const {id , newName} = req.body;
  
// console.log(id , newName);
  try {
    await moviesModels.findOneAndUpdate({ _id: id }, { name: newName },{ new: true})
    const movies = await moviesModels.find({})
    res.send(movies);
    
  } catch (error) {
    res.send(error)
  }
  

  // moviesModels
  //   .findOneAndUpdate({ _id: movieId }, { name: updatemovies },{
  //     new: true
  //   })
  //   .then((result) => {
  //     // console.log(result,"resulttt")
  //     res.send(result.movies);
  //   }).catch(err=>{
  //     res.send(err)
  //   });
};
module.exports = { getmovies, postmovies,deleteMovies,getComment, addComment, deleteComment, postvideo, updatemovies };