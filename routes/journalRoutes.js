const express = require('express');
const router = express.Router();
const Journal = require('./models/Journal')


router.post('/journal', (req, res) => {
  const newJournal = new Journal();
  newJournal.date = new Date().toDateString();
  newJournal.entry1 = req.body.entry1;
  newJournal.entry2 = req.body.entry2;
  newJournal.entry3 = req.body.entry3;
  newJournal.entry4 = req.body.entry4;
  newJournal.entry5 = req.body.entry5;
  newJournal.save()
  .then((journal) => {
    return res.status(200).json({ message: 'Success', journal });
  }).catch(err => res.status(500).json(err));
})


router.get('/journals', (req,res)=> {
    Journal.find({}).then((journals) => {
      journals.reverse();
      return res.status(200).json({ journals });
    }).catch(err=>res.status(500).json({message: 'Server Error', err}))
});


router.get('/journal/:id', (req, res) => {
  Journal.findById({ _id: req.params.id })
  .then((journal) => {
    return res.status(200).json({ journal });
  }).catch(err=>res.status(500).json({message: ' Error', err}))
});

router.put('/journal/:id', (req, res) => {
  Journal.findById({ _id: req.params.id }).then((journal) => {

    journal.entry1 = req.body.entry1 ? req.body.entry1 : journal.entry1;
    journal.entry2 = req.body.entry2 ? req.body.entry2 : journal.entry2;
    journal.entry3 = req.body.entry3 ? req.body.entry3 : journal.entry3;
    journal.entry4 = req.body.entry4 ? req.body.entry4 : journal.entry4;
    journal.entry5 = req.body.entry5 ? req.body.entry5 : journal.entry5;
    
    journal.save().then((journal) => {
      return res.status(200).json({ message: 'Journal is updated', journal });
    }).catch(err=>res.status(500).json({message: ' Error', err}))
  });
})

router.delete('/journal/:id', (req,res)=> {
  Journal.findByIdAndDelete({ _id: req.params.id })
  .then(
  res.json({ message: 'Journal is deleted' })
  );
})



module.exports = router;
