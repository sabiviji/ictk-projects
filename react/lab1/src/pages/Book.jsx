import "../assets/css/Index.css"
import React from 'react'
import HouseImg from '../images/house.jpg'

function Book() {
    return (
        <div class="main">
            <div class="wrapper">
                <div class="book-house">
                    <h3>House Name Here</h3>

                    <img src={HouseImg} />
                    <span class="house-added">03-03-2017</span><br />
                    <span class="house-location">Sano Thimi, Bhaktapur Kathmandu Nepal</span><br />
                    <span class="house-price">NRS 120000</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at porttitor urna. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae libero nec felis rhoncus sollicitudin
                        at non felis. Praesent posuere arcu sit amet augue viverra, feugiat tempus metus placerat. Aliquam iaculis mi
                        at diam gravida venenatis. Suspendisse pretium ultricies libero, id congue nibh pretium ut. Sed condimentum nec
                        diam eget elementum. Donec sed purus congue, varius massa a, tristique ipsum. Maecenas ac nunc ipsum. Sed in
                        molestie nulla. Duis nisi nibh, pellentesque ac ultricies eget, lacinia vitae elit. Cras laoreet purus
                        tellus. Vestibulum a condimentum felis, id euismod ligula.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at porttitor urna. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae libero nec felis rhoncus sollicitudin
                        at non felis. Praesent posuere arcu sit amet augue viverra, feugiat tempus metus placerat. Aliquam iaculis mi
                        at diam gravida venenatis. Suspendisse pretium ultricies libero, id congue nibh pretium ut. Sed condimentum nec
                        diam eget elementum. Donec sed purus congue, varius massa a, tristique ipsum. Maecenas ac nunc ipsum. Sed in
                        molestie nulla. Duis nisi nibh, pellentesque ac ultricies eget, lacinia vitae elit. Cras laoreet purus
                        tellus. Vestibulum a condimentum felis, id euismod ligula.
                    </p>
                </div>

                <div class="booking-details">
                    <h3>Your Booking Details</h3>
                    <form>
                        <span class="name">First Name</span>
                        <input type="text" name="first_name" placeholder="First Name Please" /><br />

                        <span class="name">Last Name</span>
                        <input type="text" name="last_name" placeholder="Last Name Please" /><br />

                        <span class="name">E-Mail</span>
                        <input type="email" name="email" placeholder="E-Mail Please" /><br />

                        <span class="name">Conatct No.</span>
                        <input type="tel" name="contact" placeholder="Contact Number Please" /><br />

                        <span class="name">Address</span>
                        <textarea name="address" placeholder="Your Address Please"></textarea><br />

                        <input type="submit" name="submit" placeholder="BOOK NOW" />
                        <input type="reset" name="reset" placeholder="RESET" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Book