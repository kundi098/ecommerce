let burger = $(".hamsburger");
let list = $(".home_list");
let cross = $(".close");

burger.click(() =>{
    // list.toggleClass("h_list");
    list.css("right", "0px");
    // list.toggle(()=>{
    //     list.css("right", "0px");
    // })
    });

    cross.click(()=>{
        list.css("right","-300px")
    })



// burger.click(()=>{
//     list.addClass("active");
// })

// let big_img =$("#nig_image");

let small_img=$( ".b_pic");
let src;

small_img.eq(0).click(()=>{
    // src="products/f1.jpg";
    $("#big_image").attr("src","img/products/f1.jpg" );
    })

    small_img.eq(1).click(()=>{
        // src="products/f1.jpg";
        $("#big_image").attr("src","img/products/f2.jpg" );
        })

        small_img.eq(2).click(()=>{
            // src="products/f1.jpg";
            $("#big_image").attr("src","img/products/f3.jpg" );
            })

            small_img.eq(3).click(()=>{
                // src="products/f1.jpg";
                $("#big_image").attr("src","img/products/f4.jpg" );
                })