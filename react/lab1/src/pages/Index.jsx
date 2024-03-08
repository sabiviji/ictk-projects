import "../assets/css/Index.css"
import React from 'react'
import HouseImg from '../images/house.jpg'

function Index() {
    return (
        <div class="main">
            <div class="wrapper">
                <h3>Recently Added</h3>
                <div class="clearfix">

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Som Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <a href="book.html">
                            <button type="button" class="btn-book" >Book House</button>
                        </a>
                    </div>

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Ram Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Shyam Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Hari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Kumari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                </div>

                <h3>Luxurious Houses</h3>
                <div class="clearfix">

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Som Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Ram Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>


                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Shyam Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Hari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Kumari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index