package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.dto.EmailDTO;
import com.example.web_ht_interior.model.Orders;
import com.example.web_ht_interior.repository.IOrdersRepository;
import com.example.web_ht_interior.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;
import java.util.Random;

@Service
public class OrdersService implements IOrdersService {
    @Autowired
     private IOrdersRepository ordersRepository;
    @Autowired
    private JavaMailSender javaMailSender;
    @Override
    public void createOrders(Orders orders) {
        ordersRepository.save(orders);
    }

    @Override
    public Orders findById(Integer id) {
        return ordersRepository.findById(id).get();
    }


    public void sendEmail(EmailDTO emailDTO) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message;
        Random random = new Random();
        int randomNumber = random.nextInt(90000) + 10000;

        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(new Locale("vi", "VN"));
        String formattedNumber = currencyFormat.format(emailDTO.getPriceTotal());
        try {
            message = new MimeMessageHelper(mimeMessage, true);
            message.setTo(emailDTO.getEmail());
            message.setSubject("Thông báo xác nhận đơn hàng: "+ randomNumber + "HT" );
            message.setText("Kính gửi Quý khách hàng,<br><br>"
                            + "<div style=\"font-weight:bold\">Cám ơn bạn đã mua hàng!</div>"

                            + "<br>"
                            + "Xin chào: " + emailDTO.getNameCustomer() + ", Chúng tôi đã nhận được đặt hàng của bạn và đã sẵn sàng để vận chuyển. "
                            + "Chúng tôi sẽ thông báo cho bạn khi đơn hàng được gửi đi"
                            + "<br>"
                            + "<br>"
                            + "Thông tin khách hàng: "
                            + "<br>"
                            + "Người nhận: " + emailDTO.getNameReceiver()
                            + "<br>"
                            + "Địa chỉ giao hàng: " + emailDTO.getAddressShipping()
                            + "<br>"
                            + "Số điện thoại người nhận: " + emailDTO.getPhoneNumberShipping()
                            + "<br>"
                            + "Thông tin đính kèm khách yêu cầu: " + emailDTO.getNote()
                            + "<br>"
                            + "<br>"
                            + "<p>Thông tin đơn hàng:</p"
                            + "<br>"
                            + "<p>Tổng tiền thanh toán: " + formattedNumber + "</p>"
                            + "<br>"
                            + "Nếu bạn có bất cứ câu hỏi nào đừng ngần ngại liên lạc với chúng tôi tại:hoanghaibk93@gmail.com "
                            + "<br>"
                            + "Đây là mail tự động, Quý khách hàng vui lòng không trả lời lại email này. "
                            + "<br>"
                            + "Nếu đơn hàng có vấn đề gì Quý khách vui lòng liên hệ hotline 1900.633.836 hoặc liên hệ qua"
                            + "<br>"
                            + "fanpage HT Interior: https://www.facebook.com/hoanghai để được hổ trợ. Xin cám ơn!"
                            + "<br><br>"
                            + "Trân trọng,<br>"
                            + "<div style=\"color:#183661; font-size:20px; font-weight:bold\">HT Interior</div>",
                    true);
            javaMailSender.send(message.getMimeMessage());
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Page<Orders> findAllByCustomer_AppUser_NameUserOrderByIdOrderDesc(String nameUser, Pageable pageable) {
        return ordersRepository.findAllByCustomer_AppUser_NameUserOrderByIdOrderDesc(nameUser, pageable);
    }
}
