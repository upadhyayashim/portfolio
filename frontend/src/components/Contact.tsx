import { useEffect, useState } from "react";
import { saveContact } from "../api/contactApi";
import { IContact } from "../types/contact";

const ContactSection = () => {
    const [form, setForm] = useState<IContact>({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });
    const [status, setStatus] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!status) return;
    
        const timer = setTimeout(() => {
            setStatus("");
        }, 4000);
    
        return () => clearTimeout(timer);
    }, [status]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            await saveContact(form);

            setStatus("✅ Message sent successfully!");
            setForm({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });
        } catch (error: any) {
            console.error("Contact API error:", error);

            setStatus(
                error?.response?.data?.message ||
                "❌ Failed to send message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6"
        >
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Contact Me</h2>
                <p className="text-gray-400 mt-3">
                    Let’s connect! Send me a message anytime.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none"
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none"
                />

                <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Your Mobile number"
                    required
                    className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none"
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                        loading
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                    <p className="text-center text-gray-300 mt-4">
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
};

export default ContactSection;