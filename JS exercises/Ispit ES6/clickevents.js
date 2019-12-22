var master = $('<div>').attr('id', 'master');
master=()=>{
    baseHtml();
    makeListOfStudents(students);
  
};
clickEvents = () => {
    clickStudents=()=>{
        $('ul[class^="student-"]').on('click', (event) => {
            let indexClass = $(event.target).attr('class').split('-');
            let index = parseInt(indexClass[1]) - 1;
            $(master).html('');
            makeStudentHtml(students[index]);
            $('.back-btn').css({'display':'none'});
            backBtn(students);
            console.log(index)
        });
    };
    clickStudents();
    $('.btn').on('click', () => {
        let inputValue = $('input').val();
        let selectedStudent = students.find(student => {
            if (student.index === parseInt(inputValue)) {
                return student
            } else {
                return false
            }
        });
        if (selectedStudent) {
            $(master).html('');
            makeStudentHtml(selectedStudent);
            $('.back-btn').css({'display':'none'});
            backBtn(students);
        } else {
            alert('Student does not exist');
        }
    });

    $('button[class^="btn-"]').on('click', (event)=>{
        let indexClass = $(event.target).attr('class').split('-');
        let index = parseInt(indexClass[1]);
        let selctedStudents = students.filter(student => {
            if (student.currentStudyYear === index) {
                return student
            }
        });
        $(master).html('');
        makeListOfStudents(selctedStudents);
        clickStudents();
        $('.back-btn').css({'display':'none'});
        backBtn(students);
        console.log(selctedStudents);
    });
    
};

