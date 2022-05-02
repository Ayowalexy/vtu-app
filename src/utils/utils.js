import $ from 'jquery'


export const HandleNotification = () => {
        setTimeout(function () {
            $('.notification').addClass('active');
            setTimeout(function () {
                $('.notification').removeClass('active');
            }, 3500);
        }, 500);
        $('.closenotification').on('click', function () {
            $(this).closest('.notification').removeClass('active')
        })
}
