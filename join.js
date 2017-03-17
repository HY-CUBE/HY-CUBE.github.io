
function joinUs(){
    var form = $('.student'),
        student = form.form('get values');
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzo2qnAbYUir8B3vuzjbVQW5AVWY4OeM1w2DkDqotwYiwm2FZ8k/exec",
        data: {
            Name:student.Name,
            Student_ID:student.ID,
            Email:student.Email,
            Phone_Num:student.Phone_Num,
            Grade:student.Grade
        },
        type: "POST",
        success: function(){      
          alert("감사합니다.");
        }
    });
}
