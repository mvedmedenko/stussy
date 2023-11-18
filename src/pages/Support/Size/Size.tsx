import s from "./Size.module.css"



const Size = () => {
    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <div>
                        <h2 className={s.title}>SIZE GUIDE</h2>
                    </div>
                    <div className={s.disclaimer}>
                        <p className={s.text}>
                            DISCLAIMER: Size, fit and measurements may vary from one style to another. Please <br />
                            refer to the flat garment measurements provided on each product page.
                        </p>
                    </div>
                    <div className={s.size_gide}>
                        <h2>INTERNATIONAL SIZE CONVERSIONS</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td className={s.type_size}>STÜSSY CLOTHING SIZE (ALPHA)</td>
                                    <th>XS</th>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>L</th>
                                    <th>XL</th>
                                    <th>XLL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={s.type_size}>STÜSSY CLOTHING SIZE (NUMERIC)</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>UK SIZE</td>
                                    <td>35-37</td>
                                    <td>29-31</td>
                                    <td>34-36</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>IT/FR/EU SIZE</td>
                                    <td>38-40</td>
                                    <td>32-34</td>
                                    <td>38-40</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>KR SIZE</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>JP SIZE</td>
                                    <td>35-37</td>
                                    <td>29-31</td>
                                    <td>34-36</td>
                                    <td>33-35</td>
                                    <td>27-29</td>
                                    <td>32-34</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>BODY MEASUREMENTS</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td className={s.type_size}>STÜSSY CLOTHING SIZE (ALPHA)</td>
                                    <th className={s.size}>XS</th>
                                    <th className={s.size}>S</th>
                                    <th className={s.size}>M</th>
                                    <th className={s.size}>L</th>
                                    <th className={s.size}>XL</th>
                                    <th className={s.size}>XLL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={s.type_size}>STÜSSY CLOTHING SIZE (NUMERIC)</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>UK SIZE</td>
                                    <td className={s.size}>35-37</td>
                                    <td className={s.size}>29-31</td>
                                    <td className={s.size}>34-36</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>IT/FR/EU SIZE</td>
                                    <td className={s.size}>38-40</td>
                                    <td className={s.size}>32-34</td>
                                    <td className={s.size}>38-40</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>KR SIZE</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>JP SIZE</td>
                                    <td className={s.size}>35-37</td>
                                    <td className={s.size}>29-31</td>
                                    <td className={s.size}>34-36</td>
                                    <td className={s.size}>33-35</td>
                                    <td className={s.size}>27-29</td>
                                    <td className={s.size}>32-34</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Size