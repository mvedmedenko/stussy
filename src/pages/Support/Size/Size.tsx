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
                                    <td className={s.size}>28</td>
                                    <td className={s.size}>29-30</td>
                                    <td className={s.size}>31-32</td>
                                    <td className={s.size}>33-34</td>
                                    <td className={s.size}>36</td>
                                    <td className={s.size}>38</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>UK SIZE</td>
                                    <td className={s.size}>36</td>
                                    <td className={s.size}>38</td>
                                    <td className={s.size}>40</td>
                                    <td className={s.size}>42</td>
                                    <td className={s.size}>44</td>
                                    <td className={s.size}>46</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>IT/FR/EU SIZE</td>
                                    <td className={s.size}>44</td>
                                    <td className={s.size}>46</td>
                                    <td className={s.size}>48</td>
                                    <td className={s.size}>50</td>
                                    <td className={s.size}>52</td>
                                    <td className={s.size}>54</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>KR SIZE</td>
                                    <td className={s.size}>90</td>
                                    <td className={s.size}>95</td>
                                    <td className={s.size}>100</td>
                                    <td className={s.size}>105</td>
                                    <td className={s.size}>110</td>
                                    <td className={s.size}>115</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>JP SIZE</td>
                                    <td className={s.size}>2</td>
                                    <td className={s.size}>3</td>
                                    <td className={s.size}>4</td>
                                    <td className={s.size}>5</td>
                                    <td className={s.size}>6</td>
                                    <td className={s.size}>7</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={s.size_gide}>
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
                                    <td className={s.size}>28</td>
                                    <td className={s.size}>29-30</td>
                                    <td className={s.size}>32-34</td>
                                    <td className={s.size}>31-32</td>
                                    <td className={s.size}>33-34</td>
                                    <td className={s.size}>36</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>CHEST (IN)</td>
                                    <td className={s.size}>38-40"</td>
                                    <td className={s.size}>42-44"</td>
                                    <td className={s.size}>44-46"</td>
                                    <td className={s.size}>46-48"</td>
                                    <td className={s.size}>48-50"</td>
                                    <td className={s.size}>52-54"</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>WAIST (IN)</td>
                                    <td className={s.size}>26-27"</td>
                                    <td className={s.size}>28-29"</td>
                                    <td className={s.size}>30-31"</td>
                                    <td className={s.size}>32-34"</td>
                                    <td className={s.size}>35-36"</td>
                                    <td className={s.size}>37"</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>CHEST (CM)</td>
                                    <td className={s.size}>96-101</td>
                                    <td className={s.size}>106-111</td>
                                    <td className={s.size}>112-117</td>
                                    <td className={s.size}>117-122</td>
                                    <td className={s.size}>122-127</td>
                                    <td className={s.size}>132-137</td>
                                </tr>
                                <tr>
                                    <td className={s.type_size}>WAIST (CM)</td>
                                    <td className={s.size}>66-68</td>
                                    <td className={s.size}>71-73</td>
                                    <td className={s.size}>76-78</td>
                                    <td className={s.size}>81-86</td>
                                    <td className={s.size}>88-91</td>
                                    <td className={s.size}>92-94</td>
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