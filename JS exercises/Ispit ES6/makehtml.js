var master = $('<div>').attr('id', 'master');

baseHtml= ()=>{
    console.log(students);
    var input = $('<input/>')
    var button = $('<button/>').attr('class', 'btn').text('Search');
    var button1 = $('<button/>').attr('class', 'btn-1').text('1st-Year');
    var button2 = $('<button/>').attr('class', 'btn-2').text('2nd-Year');
    var button3 = $('<button/>').attr('class', 'btn-3').text('3rd-Year');
    var button4 = $('<button/>').attr('class', 'btn-4').text('4th-Year');
    var par = $('<p>')
    var body = $('body');
    body.append(input);
    body.append(button);
    body.append(par);
    body.append(button1);
    body.append(button2);
    body.append(button3);
    body.append(button4);
    body.append(master);
};

makeStudentHtml = (student)=>{
    let index = student.lastName;
    let className = 'student-'+ index;
    let studentHolder = $('<ul>').attr('class',className);
    let studentName = $('<li>').attr('class',className).text('Name: '+ student.firstName);
    let studentLastName = $('<li>').attr('class',className).text('Surname: ' + student.lastName);
    let studentStudyYear = $('<li>').attr('class',className).text('Study year: ' + student.currentStudyYear);
    let studentGrades = $('<ul>').attr('class',className).text('Grades:');
    student.grades.forEach(grade=>{studentGrades.append($('<li>').text(grade).attr('class','grade-'+ className).css({'display':'none'}))});
    let averageGrade = student.grades.reduce((grades,grade)=>{
        return grades = grades+grade;
    },0);
    let studentAvgGrade = $('<li>').attr('class',className).text('Average Grade: ' + Math.floor(averageGrade/student.grades.length));
    let studentIndex = $('<li>').attr('class',className).text('Index: ' + student.index);
    let toBeAppended = [studentHolder,studentName,studentLastName,studentStudyYear,studentGrades, studentAvgGrade,studentIndex];
    toBeAppended.forEach(elem=>{studentHolder.append(elem)});
    master.append(studentHolder);
    
    $(studentGrades).on('click',()=>{
        if($('.grade-'+className).css('display') == 'none'){
            $('.grade-'+className).css({'display':'block'})
        }else{
            $('.grade-'+className).css({'display':'none'})
        }
    });
    
};
makeListOfStudents = (students)=>{
    students.forEach(student=>{
        makeStudentHtml(student);
    });
};

backBtn=()=>{
    var button = $('<button/>').attr('class', 'back-btn').text('Back');
    var body = $('body');
    body.prepend(button);
    $(button).on('click',()=>{
        $(master).html('')
        makeListOfStudents(students);
        clickEvents();
        $(button).css({'display':'none'});
    });
};