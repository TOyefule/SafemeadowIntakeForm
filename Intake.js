$(document).ready(function() {
    $("#patientForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        let formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        $.ajax({
            url: "save_data.php",
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                $(".container").html(`
                    <div class='text-center'>
                        <h2 class='text-2xl font-bold text-green-600'>Form Submitted Successfully!</h2>
                        <p class='mt-4'>Thank you for completing the intake form. Our team will review your submission and contact you if needed.</p>
                        <a href='index.html' class='mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>Go Back</a>
                    </div>
                `);
            },
            error: function(xhr, status, error) {
                alert("Error: " + error);
            }
        });
    });

    // Apply styling dynamically
    $("#patientForm input, #patientForm select, #patientForm textarea").on("focus", function() {
        $(this).addClass("ring-2 ring-indigo-400");
    }).on("blur", function() {
        $(this).removeClass("ring-2 ring-indigo-400");
    });
});
