jQuery(".form-valid").validate({
    rules: {
        "courseThambnail": {
            required: !0,
        },
        "courseTitle": {
            required: !0,
            minlength: 3
        },
        "courseDesc": {
            required: !0,
            minlength: 15
        },
        "coursePrice": {
            required: !0,
            currency: ["$", !0]
        },
        "courseCategory": {
            required: !0,
        },
        "courseSubCategory": {
            required: !0,
            minlength: 3
        },
        "courseDificultyLevel": {
            required: !0,
        },
        "courseFeatures": {
            required: !0,
            minlength: 3
        },
        "courseTags": {
            required: !0,
        },
        "courseAccessibility": {
            required: !0
        },
        "lessonVideo": {
            required: !0
        },
        "lessonVideothumbnail": {
            required: !0
        },
        "lessonName": {
            required: !0,
            minlength: 3
        },
        "lessonDesc": {
            required: !0,
            minlength: 15
        }
    },
    messages: {
        "courseThambnail": "Please upload a thumbnail",
        "courseTitle": {
            required: "Please enter a title",
            minlength: "Your course title must consist of at least 3 characters"
        },
        "courseDesc": {
            required: "Please enter a description",
            minlength: "Your course description must consist of at least 3 characters"
        },
        "coursePrice": {
            required: "Please enter only digits!",
            currency: "Please add $"
        },
        "courseCategory": "Please select a course category!",
        "courseSubCategory": {
            required: "Please enter a sub-category name",
            minlength: "Sub-category field must consist of at least 3 characters"
        },
        "courseDificultyLevel": "Dificulty level must be selected",
        "courseFeatures": {
            required: "Course feature must be required",
            minlength: "Your course feature must consist of at least 3 characters"
        },
        "courseTags": "Minimum one tag required",
        "courseAccessibility": "Please select a roll",
        "lessonVideo": "Please upload a video file",
        "lessonVideothumbnail": "Please upload a thumbnail",
        "lessonName": {
            required: "Lesson must be required",
            minlength: "Your Lesson name must consist of at least 3 characters"
        },
        "lessonDesc": {
            required: "Lesson description must be required",
            minlength: "Your Lesson description must consist of at least 15 characters"
        }
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});
jQuery(".profile-valid").validate({
    rules: {

        "val-email": {
            required: !0,
            email: !0
        },
        "val-password": {
            required: !0,
            minlength: 8
        },
        // "val-confirm-password": {
        //     required: !0,
        //     equalTo: "#val-password"
        // },
        // "val-select2": {
        //     required: !0
        // },
        // "val-select2-multiple": {
        //     required: !0,
        //     minlength: 2
        // },
        // "val-suggestions": {
        //     required: !0,
        //     minlength: 5
        // },
        // "val-skill": {
        //     required: !0
        // },
        // "val-currency": {
        //     required: !0,
        //     currency: ["$", !0]
        // },
        // "val-website": {
        //     required: !0,
        //     url: !0
        // },
        // "val-phoneus": {
        //     required: !0,
        //     phoneUS: !0
        // },
        // "val-digits": {
        //     required: !0,
        //     digits: !0
        // },
        // "val-number": {
        //     required: !0,
        //     number: !0
        // },
        // "val-range": {
        //     required: !0,
        //     range: [1, 5]
        // },
        // "val-terms": {
        //     required: !0
        // }
    },
    messages: {
        "val-email": "Please enter a valid email address",
        "val-password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long"
        },
        // "val-confirm-password": {
        //     required: "Please provide a password",
        //     minlength: "Your password must be at least 5 characters long",
        //     equalTo: "Please enter the same password as above"
        // },
        // "val-select2": "Please select a value!",
        // "val-select2-multiple": "Please select at least 2 values!",
        // "val-suggestions": "What can we do to become better?",
        // "val-skill": "Please select a skill!",
        // "val-currency": "Please enter a price!",
        // "val-website": "Please enter your website!",
        // "val-phoneus": "Please enter a US phone!",
        // "val-digits": "Please enter only digits!",
        // "val-number": "Please enter a number!",
        // "val-range": "Please enter a number between 1 and 5!",
        // "val-terms": "You must agree to the service terms!"
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});
jQuery(".user-valid").validate({
    rules: {

        "userName": {
            required: !0,
            minlength: 4
        },
        "userPhoto": {
            required: !0
        },

    },
    messages: {
        "userName": {
            required: "Please provide a user name",
            minlength: "Your user name must be at least 4 characters long"
        },
        "userPhoto": "User photo required",

    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});
jQuery(".personal-info-valid").validate({
    rules: {

        "fullName": {
            required: !0,
            minlength: 4
        },
        "email": {
            required: !0,
            email: !0
        },
        "address": {
            required: !0
        },
        "city": {
            required: !0
        },
        "postCode": {
            required: !0,
            number: !0
        },
        "country": {
            required: !0
        },

    },
    messages: {
        "fullName": {
            required: "Please provide your full name",
            minlength: "Your user name must be at least 4 characters long"
        },
        "email": {
            required: "Email required",
            email: "Please enter a valid email"
        },
        "address": {
            required: "Address required",
            email: "Your address must be at least 10 characters long"
        },
        "city": {
            required: "City required",
            email: "Your city must be at least 4 characters long"
        },
        "postcode": {
            required: "Post code required",
            email: "Post code should be a number"
        },
        "country": {
            required: "Country required"
        },


    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".info-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".info-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".info-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});

jQuery(".personal-info-valid").validate({
    rules: {

        "fullName": {
            required: !0,
            minlength: 4
        },
        "email": {
            required: !0,
            email: !0
        },
        "address": {
            required: !0
        },
        "city": {
            required: !0
        },
        "postCode": {
            required: !0,
            number: !0
        },
        "country": {
            required: !0
        },

    },
    messages: {
        "fullName": {
            required: "Please provide your full name",
            minlength: "Your user name must be at least 4 characters long"
        },
        "email": {
            required: "Email required",
            email: "Please enter a valid email"
        },
        "address": {
            required: "Address required",
            email: "Your address must be at least 10 characters long"
        },
        "city": {
            required: "City required",
            email: "Your city must be at least 4 characters long"
        },
        "postcode": {
            required: "Post code required",
            email: "Post code should be a number"
        },
        "country": {
            required: "Country required"
        },


    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".info-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".info-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".info-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});



jQuery(".app-info-valid").validate({
    rules: {

        "language": {
            required: !0
        },
        "currency": {
            required: !0
        },
        "theme": {
            required: !0
        },
        "timeZone": {
            required: !0
        }

    },
    messages: {
        "language": {
            required: "Please select your language"
        },
        "currency": {
            required: "A currency must be selected"
        },
        "theme": {
            required: "Please select a theme"
        },
        "timeZone": {
            required: "Please select a time zone"
        }


    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".app-info-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".app-info-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".app-info-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});




jQuery(".api-key-valid").validate({
    rules: {

        "newKey": {
            required: !0
        },
        "passPhrase": {
            required: !0
        }

    },
    messages: {
        "newKey": {
            required: "API key required"
        },
        "passPhrase": {
            required: "A currency must be selected"
        }


    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".api-key-group > div").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".api-key-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".api-key-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});

